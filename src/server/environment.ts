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