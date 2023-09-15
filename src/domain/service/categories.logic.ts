import {
  ICategoriesLogic,
  CrateCategoryInput,
  GetCategoryOutput,
} from '../interfaces-type';
import { ICategoryRepository as ICat } from '../../data-access/interfaces-type';
import { sortCategories } from '../../utils';

class CategoriesLogic implements ICategoriesLogic {
  public async CrateCategory(data: CrateCategoryInput, repository: ICat) {
    const { name, parentId } = data;

    await repository.CrateCategory(name, parentId);

    return;
  }

  public async GetCategory(repository: ICat): Promise<GetCategoryOutput> {
    const categories = await repository.GetAllCategories();

    const pares = JSON.parse(JSON.stringify(categories));

    const result = sortCategories(pares);

    return result;
  }

  public async UpdateCategoryName(id: string, name: string, repository: ICat) {
    await repository.UpdateCategoryName(id, name);
  }

  public async DeleteCategory(id: string, repository: ICat) {
    await repository.DeleteCategory(id);
  }
}

export const categoriesLogic = new CategoriesLogic();
