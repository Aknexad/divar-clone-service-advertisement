import { ICategoriesLogic, CrateCategoryInput } from '../interfaces-type';
import { ICategoryRepository as ICat } from '../../data-access/interfaces-type';

class CategoriesLogic implements ICategoriesLogic {
  public async CrateCategory(data: CrateCategoryInput, repository: ICat) {
    const { name, parentId } = data;

    await repository.CrateCategory(name, parentId);

    return;
  }

  public async GetCategory(repository: ICat) {
    return await repository.GetAllCategories();
  }

  public async UpdateCategoryName(id: string, name: string, repository: ICat) {
    await repository.UpdateCategoryName(id, name);
  }

  public async DeleteCategory(id: string, repository: ICat) {
    await repository.DeleteCategory(id);
  }
}

export const categoriesLogic = new CategoriesLogic();
