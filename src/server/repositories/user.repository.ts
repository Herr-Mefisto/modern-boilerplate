import { User } from "../entities/User.entity";
import { createConnection, Repository } from "typeorm";

export class UserRepository {

  public async getUser(id: string): Promise<User> {
    const connection = await createConnection();
    const reporitory = connection.getRepository(User);
    const user = await reporitory.findOne(id);
    return user;
  }
}
