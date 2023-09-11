import express, { Request, Response, NextFunction } from 'express';

import { categoriesRepository as catRepo } from '../../data-access/repository';
import { categoriesLogic } from '../../domain/service';

const router = express.Router();

export default function categoriesRoutes() {
  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, parentId } = req.body;

      const result = await categoriesLogic.CrateCategory({ name, parentId }, catRepo);
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await categoriesLogic.GetCategory(catRepo);
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  router.patch('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, id } = req.body;

      const result = await categoriesLogic.UpdateCategoryName(id, name, catRepo);
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await categoriesLogic.DeleteCategory(req.body.id, catRepo);
      res.status(200).json({ msg: '', payload: result });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
