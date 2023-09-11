import { CategoryModel } from '../models';
import { ICategoryRepository } from '../interfaces-type';

class CategoriesRepository implements ICategoryRepository {
  constructor(private categoryModel: typeof CategoryModel) {
    this.categoryModel = categoryModel;
  }

  public async CrateCategory(name: string, parentId?: string): Promise<void> {
    await this.categoryModel.Category.create({ name, parentId });
    return;
  }

  public async GetAllCategories(): Promise<any> {
    return await this.categoryModel.Category.find();
  }
  public async UpdateCategoryName(id: string, name: string): Promise<void> {
    await this.categoryModel.Category.findByIdAndUpdate(id, { name });
    return;
  }

  public async DeleteCategory(id: string): Promise<void> {
    await this.categoryModel.Category.findByIdAndDelete(id);
    return;
  }
}

export const categoriesRepository = new CategoriesRepository(CategoryModel);
