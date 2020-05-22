import { NextFunction, Request, Response } from 'express';
import { CreateUserDTO, LoginUserDTO } from '../dtos/users.dto';
import AuthService from '../services/auth.service';
import { User } from '../interfaces/users.interface';


export default class AuthController{

  private authService :AuthService;

  constructor(){
    this.authService  = new AuthService();
  }

  public signUp = async (req: Request, res: Response, next : NextFunction) =>{
    const userDTO :CreateUserDTO = req.body;

    try{
      const user: User = await this.authService.signUp(userDTO);
      res.json(user);
    }
    catch(error){
      next(error);
    }
  }

  public logIn = async (req: Request, res: Response, next : NextFunction) =>{

  }

  public logOut = async (req: Request, res: Response, next : NextFunction) =>{

  }
}