import { Router } from 'express';
// import { Channel } from 'amqplib';

import restful from './restful';

const router = Router();

export = () => {
  router.use('/restful', restful());

  return router;
};
