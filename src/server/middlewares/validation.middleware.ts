import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler, Request, Response, NextFunction } from "express";
import HttpException from '../exceptions/HttpException';
import { ApiRequest, ApiResponse } from 'server/interfaces/Requests';

export default function validationMiddleware(type: any, skipMissingProperties = false) {
  return (req: ApiRequest, res: ApiResponse, next: NextFunction) => {

    let source: any;
    if (req.body === undefined || Object.keys(req.body).length === 0)
      source = req.params;
    else
      source = req.body;

    const inputObject = plainToClass(type, source);
    
    validate(inputObject, { skipMissingProperties })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
          next(new HttpException(400, message));
        }
        else {
          req.data = inputObject;
          next();
        }
      });
  };
}
