import Route from "../interfaces/routes.interface";
import { Router } from 'express';
import validationMiddleware from "../middlewares/validation.middleware";
import { CreateUserDTO, LoginUserDTO } from "../dtos/users.dto";
import AuthController from "../controllers/auth.controller";
import { ApiRequest } from "server/interfaces/Requests";


export default class AuthRoute implements Route {
  public path = "auth";
  public router = Router();
  public needsAuthorization = false;
  public authController = new AuthController();;

  constructor() {
    this.router.get("/", (req, res) => { res.json("ok !") });

    this.router.post("/signup", validationMiddleware(CreateUserDTO), (req: ApiRequest) => { return this.authController.signUp(req.data) });

    this.router.post("/login", validationMiddleware(LoginUserDTO), (req: ApiRequest) => { return this.authController.logIn(req.data) });

    this.router.post("/logout", this.authController.logOut);
  }
}