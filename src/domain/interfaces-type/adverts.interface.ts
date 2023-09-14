import { IAdvertisementRepository } from '../../data-access/interfaces-type';

export interface CrateAdvertInput {
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

export interface UpdateAdvertInput {
  id: string;
  title: string;
  description: string;
  condition: string;
}

export interface GetAdvertInOutput {
  advertId: string;
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
}

type GetAdvertContactsOutput = {
  phone: string;
};

export interface IAdvertisementLogics {
  CrateAdvert(
    data: CrateAdvertInput,
    repository: IAdvertisementRepository
  ): Promise<void>;

  GetAdvert(
    query: any,
    repository: IAdvertisementRepository
  ): Promise<GetAdvertInOutput[] | []>;

  GetAdvertById(
    id: string,
    repository: IAdvertisementRepository
  ): Promise<GetAdvertInOutput | null>;

  GetAdvertContacts(
    advertId: string,
    repository: IAdvertisementRepository
  ): Promise<GetAdvertContactsOutput | null>;

  UpdateAdvert(
    data: UpdateAdvertInput,
    repository: IAdvertisementRepository
  ): Promise<void>;

  DeleteAdvert(advertId: string[], repository: IAdvertisementRepository): Promise<void>;
}
