import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import advertisementRoute from './entry-points/api/add-router';
import { errorHandler, isOperationalError } from './middleware';

export default async (app: Application) => {
  app.use(express.json());
  app.use(helmet());
  app.use(cors());

  //const channel = await CreateChannel()
  // advertisement route
  app.use('/advertisement', advertisementRoute());
  // category route
  // app.use('/categories');

  app.use(errorHandler);

  process.on('uncaughtException', (reason: string, p: Promise<any>) => {
    throw reason;
  });

  process.on('unhandledRejection', (error: Error) => {
    if (!isOperationalError(error)) {
      process.exit(1);
    }
  });
};
