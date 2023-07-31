import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routers from './routers';

export default async (app: Application) => {
  app.use(express.json());
  app.use(helmet());
  app.use(cors());

  //const channel = await CreateChannel()

  app.use('/api', routers());
};
