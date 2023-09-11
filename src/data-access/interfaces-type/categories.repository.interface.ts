import { Document, Types } from 'mongoose';

export interface IGetCategoriesOutput extends Document {
  _id: Types.ObjectId;
  id: string;
  name: string;
  parentId: string;
}

export interface ICategoryRepository {
  CrateCategory(name: string, parentId?: string): Promise<void>;

  GetAllCategories(): Promise<IGetCategoriesOutput>;

  UpdateCategoryName(id: string, name: string): Promise<void>;

  DeleteCategory(id: string): Promise<void>;
}
