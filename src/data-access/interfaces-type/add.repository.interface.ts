import { Types } from 'mongoose';

type CrateAdvertisement = {
  userId: string;
  title: string;
  description: string;
  condition: 'نو' | 'در حد نو' | 'کار کرده' | 'نیاز به تعمیر';
  inStockCount: number;
  price: number;
  categories: string[];
  images: string[];
  longitude?: string;
  latitude?: string;
  city: string;
  Neighborhood: string;
};

type AdvertisementDocument = {
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
  productId: Types.ObjectId;
  longitude?: string;
  latitude?: string;
  city: string;
  Neighborhood: string;
};

export interface AdvertisementRepositoryInterface {
  carateAdverts(data: CrateAdvertisement): Promise<void>;

  getAdverts(query: any): Promise<any>;

  getAdvertById(id: string): Promise<AdvertisementDocument | null>;
}
