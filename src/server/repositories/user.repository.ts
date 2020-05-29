import { User } from "server/entities/User.entity";
import { createConnection } from "server/utils/DatabaseProvider";
import Knex from "knex";

export class UserRepository {

  public async getUser(id: string): User {
  }
}
