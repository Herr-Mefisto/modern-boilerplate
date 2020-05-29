import { NextFunction, Request, Response, Send } from "express-serve-static-core";

export  interface ApiRequest<Data = {}> extends Request {
  data: Data,
  session: any,
  lang: string,
}

export interface ApiResponse<Resp = {}> extends Response {
  pageSize: number,
}