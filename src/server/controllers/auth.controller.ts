import { NextFunction, Request, Response } from 'express';
import { CreateUserDTO, LoginUserDTO, LogoutUserDTO } from '../dtos/users.dto';
import { User } from '../interfaces/users.interface';

export default class AuthController {

  public signUp = async (input: Partial<CreateUserDTO>): Promise<void> => {
    return new Promise(res => {
      console.log(input);
      res();
    });
  }

  public logIn = async (input: Partial<LoginUserDTO>) => {

  }

  public logOut = async (input: Partial<LogoutUserDTO>) => {

  }
}