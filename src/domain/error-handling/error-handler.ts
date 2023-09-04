// import { createLogger, transports } from 'winston';
import { Request, Response, NextFunction } from 'express';

import { AppError } from './app-error';

interface Error {
  httpCode?: number;
  data?: object | string;
  message: string;
}

// const logErrors = createLogger({
//   transports: [
//     new transports.Console(),
//     new transports.File({ filename: './logs/error.log' }),
//   ],
// });

// class ErrorLogger {
//   constructor() {}
//   async logError(err: any) {
//     console.log('==================== Start Error Logger ===============');
//     logErrors.log({
//       private: true,
//       level: 'error',
//       message: `${new Date()}-${JSON.stringify(err)}`,
//     });
//     console.log('==================== End Error Logger ===============');
//     // log error with Logger plugins

//     return false;
//   }

//   isTrustError(error: any) {
//     if (error instanceof AppError) {
//       return error.isOperational;
//     } else {
//       return false;
//     }
//   }
// }

export const logError = (error: Error) => {
  console.log(error);
};

export const returnError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  res.status(error.httpCode || 500).json({ message: error.message });
};

export const isOperationalError = (error: Error) => {
  if (error instanceof AppError) {
    return error.isOperational;
  }
  return false;
};

// const ErrorHandler = async (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const errorLogger = new ErrorLogger();

//   process.on('uncaughtException', (reason, promise) => {
//     console.log(reason, 'UNHANDLED');
//     throw reason; // need to take care
//   });

//   process.on('uncaughtException', error => {
//     errorLogger.logError(error);
//     if (errorLogger.isTrustError(err)) {
//       //process exist // need restart
//     }
//   });

//   next();
// };

// export default ErrorHandler;
