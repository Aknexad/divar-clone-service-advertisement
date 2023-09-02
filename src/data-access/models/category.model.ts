import mongoose from 'mongoose';

interface CategoryModel {
  name: string;
  parentId: mongoose.Schema.Types.ObjectId | null;
}

const categorySchema = new mongoose.Schema<CategoryModel>({
  name: { type: String, required: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, default: null },
});

export const Category = mongoose.model<CategoryModel>(
  'Category',
  categorySchema
);
