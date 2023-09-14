import { Document } from 'mongoose';

export interface CrateAdvertisement {
  userId: string;
  title: string;
  description: string;
  condition: string;
  inStockCount: number;
  price: number;
  categories: string[];
  images: string[];
  longitude?: string;
  latitude?: string;
  city: string;
  Neighborhood: string;
}

export interface AdvertisementDocument extends Document {
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

export interface GetAdvertsQuery {
  condition?: string | { $ne: null };
  categories?: string[] | { $ne: null };
  longitude?: string | { $ne: null };
  latitude?: string | { $ne: null };
  city: string | { $ne: null };
}

export interface IAdvertisementRepository {
  CarateAdverts(data: CrateAdvertisement): Promise<AdvertisementDocument>;

  GetAdverts(query: GetAdvertsQuery): Promise<AdvertisementDocument[]>;

  GetAdvertById(id: string): Promise<AdvertisementDocument | null>;

  UpdateAdvert(id: string, data: any): Promise<unknown>;
  DeleteAdvert(id: string): Promise<Document | null>;
}
