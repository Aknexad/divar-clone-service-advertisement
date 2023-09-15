import { ICategoryRepository as ICat } from '../../data-access/interfaces-type';

export type CrateCategoryInput = {
  name: string;
  parentId?: string;
};

export interface GetCategoryOutput {
  id: string;
  name: string;
  parentId: string | null;
  subCategories: GetCategoryOutput[];
}

export interface ICategoriesLogic {
  CrateCategory(data: CrateCategoryInput, repository: ICat): Promise<void>;

  GetCategory(repository: ICat): Promise<GetCategoryOutput | []>;

  UpdateCategoryName(id: string, name: string, repository: ICat): Promise<void>;

  DeleteCategory(id: string, repository: ICat): Promise<void>;
}
