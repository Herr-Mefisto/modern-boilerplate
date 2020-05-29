import { NextFunction, Request, Response } from 'express';
import { CreateUserDTO, LoginUserDTO, LogoutUserDTO, GetUserDTO } from '../dtos/users.dto';
import { UserRepository } from '../repositories/user.repository';
import { User } from 'server/entities/User.entity';

export default class AuthController {

  private userRepository = new UserRepository();

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

  public getUser = async (input: Partial<GetUserDTO>): Promise<User> => {
    const user = await this.userRepository.getUser(input.id);
    return user;
  }
}