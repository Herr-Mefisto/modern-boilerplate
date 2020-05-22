import Route from "../interfaces/routes.interface";
import { Router } from 'express';
import validationMiddleware from "../middlewares/validation.middleware";
import { CreateUserDTO, LoginUserDTO } from "../dtos/users.dto";
import AuthController from "../controllers/auth.controller";
import authMiddleware from "../middlewares/auth.middleware";


export default class AuthRoute implements Route {
  public path: string = "auth";
  public router = Router();

  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", (req, res, next) => { res.json("ok !") });
    this.router.post("/signup", validationMiddleware(CreateUserDTO), this.authController.signUp);
    this.router.post("/login", validationMiddleware(LoginUserDTO), this.authController.logIn);
     this.router.post("/logout", authMiddleware, this.authController.logOut);
  }
}