import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import advertisementRoute from './entry-points/api/add-router';
import { logError, returnError } from './domain/error-handling';

export default async (app: Application) => {
  app.use(express.json());
  app.use(helmet());
  app.use(cors());

  //const channel = await CreateChannel()
  // advertisement route
  app.use('/api/advertisement', advertisementRoute());
  // category route
  // app.use('/categories');

  app.use(logError);
  app.use(returnError);
};
