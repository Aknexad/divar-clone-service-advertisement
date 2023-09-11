import express, { Request, Response, NextFunction, Router } from 'express';
import { advertisementRepository } from '../../data-access/repository';
import { advertisementLogics } from '../../domain/service';
import { validation } from '../../middleware';
import { validationSchema } from '../../utility';

const router = express.Router();

export default function advertisementRoute(): Router {
  router.post(
    '/',
    validation(validationSchema.CrateAdvertsSchema),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await advertisementLogics.CrateAdvert(
          { userId: '1234', ...req.body },
          advertisementRepository
        );
        res.status(200).json({ msg: '', payload: result });
      } catch (error) {
        next(error);
      }
    }
  );

  // get all advertisements in city
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await advertisementLogics.GetAdvert(
        req.query,
        advertisementRepository
      );
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  // get advertisement by id
  router.get('/id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.query.id as string;

      const result = await advertisementLogics.GetAdvertById(id, advertisementRepository);
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  // get advertisement Contacts
  router.get('contacts', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const advertId: string = req.query.advertId as string;

      const result = await advertisementLogics.GetAdvertContacts(
        advertId,
        advertisementRepository
      );
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  router.put('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await advertisementLogics.UpdateAdvert(
        req.body,
        advertisementRepository
      );
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ids: string[] = req.body.ids as string[];
      const result = await advertisementLogics.DeleteAdvert(ids, advertisementRepository);
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
