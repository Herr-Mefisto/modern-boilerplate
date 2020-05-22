import { RequestHandler } from "express";

export default function authMiddleware(): RequestHandler {
  return (req, res, next) => {
    //TODO: Needs implementation
    next();
  };
}