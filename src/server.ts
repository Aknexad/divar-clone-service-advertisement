import express from 'express';

import expressApp from './express-app';
import config from './configs';
import { connectToDatabase } from './data-access/database-connection';

const { PORT, DATABASE_URL } = config;

const startServer = async () => {
  const app = express();

  await connectToDatabase(DATABASE_URL!);
  await expressApp(app);

  app
    .listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
    .on('error', err => {
      console.log(err);
      process.exit();
    })
    .on('close', () => {
      // channel.close();
    });
};

startServer();
