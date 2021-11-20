import {  Request as ExpressRequest, Response as ExpressResponse, NextFunction } from 'express';

// Wraps async functions, catching all errors and sending them forward to express error handler
export default function asyncWrap(controller: CallableFunction) {
  return async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
    try {
        console.log("EXEC")
      await controller(req, res, next);
    } catch (e) {
        console.log("ERRR")
    //   next(e);
    }
  };
}
