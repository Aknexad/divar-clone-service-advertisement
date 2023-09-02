import express, { Request, Response, NextFunction, Router } from 'express';

const router = express.Router();

export default function advertisementRoute(): Router {
  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = '';
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  // get all advertisements in city
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = '';
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  // get advertisement by id
  router.get('/id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = '';
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  // get advertisement by category
  router.get(
    '/category',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = '';
        res.status(200).json({ msg: '', payload: result });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = '';
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  router.delete(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = '';
        res.status(200).json({ msg: '', payload: result });
      } catch (error) {
        next(error);
      }
    }
  );

  return router;
}
