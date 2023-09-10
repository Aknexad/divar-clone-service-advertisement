import mongoose from 'mongoose';

interface AdvertisementModel {
  userId: string;
  title: string;
  description: string;
  condition: 'نو' | 'در حد نو' | 'کار کرده' | 'نیاز به تعمیر';
  postAt: number;
  confirmed: boolean;
  inStockCount: number;
  price: number;
  categories: string[];
  images: string[];
  longitude?: string;
  latitude?: string;
  city: string;
  Neighborhood: string;
}

const AdvertisementSchema = new mongoose.Schema<AdvertisementModel>({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  condition: { type: String, required: true },
  postAt: { type: Number, default: Date.now() },
  confirmed: { type: Boolean, default: false },
  price: { type: Number, required: true },
  categories: { type: [String], required: true },
  images: { type: [String], required: true },
  longitude: { type: String },
  latitude: { type: String },
  city: { type: String, required: true },
  Neighborhood: { type: String, required: true },
});

export const AdvertisementModel = mongoose.model('Advert', AdvertisementSchema);
