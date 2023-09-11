import { ICategoryRepository as ICat } from '../../data-access/interfaces-type';

export type CrateCategoryInput = {
  name: string;
  parentId?: string;
};

export interface ICategoriesLogic {
  CrateCategory(data: CrateCategoryInput, repository: ICat): Promise<void>;

  GetCategory(repository: ICat): Promise<any>;

  UpdateCategoryName(id: string, name: string, repository: ICat): Promise<void>;

  DeleteCategory(id: string, repository: ICat): Promise<void>;
}
