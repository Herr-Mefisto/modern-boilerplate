import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as hpp from 'hpp';
import * as logger from 'morgan';
import Route from './interfaces/routes.interface';
import errorMiddleware from './middlewares/error.middleware';
import { environment } from './environment';
import "reflect-metadata";
import authMiddleware from './middlewares/auth.middleware';
class App {
  public app: express.Application;
  public port: number | string;
  public env: boolean;

  constructor(routes: Route[]) {
    this.app = express();
    this.port = environment.port;
    this.env = environment.type === 'production' ? true : false;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server app listening on the port ${this.port}`);
    })
  }

  public getServer() {
    return this.app;
  }

  private initializeRoutes(routes: Route[]) {
    const routesWithAuthorization = routes.filter((route: Route) => route.needsAuthorization);
    const routesWithoutAuthorization = routes.filter((route: Route) => !route.needsAuthorization);

    routesWithoutAuthorization.forEach((route) => {
      const routePath = route.path ? route.path : '';
      this.app.use(`/api/${routePath}`, route.router);
    });

    this.app.use(authMiddleware);

    routesWithAuthorization.forEach((route) => {
      const routePath = route.path ? route.path : '';
      this.app.use(`/api/${routePath}`, route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeMiddlewares() {
    if (this.env) {
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(logger('combined'));
      this.app.use(cors({ origin: environment.domain, credentials: true }));
    } else {
      this.app.use(logger('dev'));
      this.app.use(cors({ origin: true, credentials: true }));
    }

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeSwagger() {
    const swaggerJSDoc = require('swagger-jsdoc');
    const swaggerUi = require('swagger-ui-express');

    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Example docs',
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
  }
}
export default App;
