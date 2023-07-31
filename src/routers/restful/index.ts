import { Router } from 'express';

import user from './user';

const router = Router();

export = () => {
  router.use('/v1', user);

  return router;
};
