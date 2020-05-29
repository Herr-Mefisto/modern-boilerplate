import { Router } from 'express';

interface Route {
  path?: string;
  router: Router;
  needsAuthorization : boolean;
}

export default Route;
