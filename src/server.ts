import express from 'express';

import expressApp from './express-app';
import config from './config';

const PORT = config.PORT;

const startServer = async () => {
  const app = express();

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
