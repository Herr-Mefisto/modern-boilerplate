import { CreateUserDTO } from '../dtos/users.dto';
import { User } from 'server/interfaces/users.interface';

class AuthService {

  public async signUp(user: CreateUserDTO) : Promise<User>{
    return null;
  }

  public async logIn(user: CreateUserDTO) : Promise<{ cookie: string, user: User }>{
    return null;
  }

  public async logOut(user: User) : Promise<User>{
    return null;
  }
}

export default AuthService;