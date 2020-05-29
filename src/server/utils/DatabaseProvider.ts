/* tslint:disable await-promise */

import { Database } from '../environment';

/**
 * Initialize a new Postgres provider
 */
export function createConnection() {
  // const knex = Knex({
  //   client: 'pg',
  //   connection: {
  //     user: Database.userName,
  //     password: Database.password,
  //     host: Database.host,
  //     port: parseInt(Database.port),
  //     database: Database.databaseName
  //   },
  //   pool: {
  //     min: Database.poolMin,
  //     max: Database.poolMax,
  //     idleTimeoutMillis: Database.poolIdle
  //   },
  //   acquireConnectionTimeout: 2000
  // })

  // return knex;
}
