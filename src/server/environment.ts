const defaultPort = 4000;
const defaultEnv = "development";

interface Environment{
  port: number|string;
  type: string;
  domain:string;
}

export const environment: Environment = {
  port: process.env.PORT || defaultPort,
  type: process.env.NODE_ENV || defaultEnv,
  domain: 'localhost'
}

export namespace Database {
  export const host= process.env.DATABASE_HOSTNAME || 'postgres';
  export const databaseName= process.env.DATABASE_NAME || 'payroll';
  export const userName= process.env.DATABASE_USERNAME || 'postgres';
  export const password= process.env.DATABASE_PASSWORD || '12345';
  export const port = process.env.DATABASE_PORT || "5432";
  export const poolMin = Number(process.env.DATABASE_POOL_MIN || '0')
  export const poolMax = Number(process.env.DATABASE_POOL_MAX || '10')
  export const poolIdle = Number(process.env.DATABASE_POOL_IDLE || '10000')
}