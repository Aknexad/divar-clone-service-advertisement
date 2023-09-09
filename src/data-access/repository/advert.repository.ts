import {
  IAdvertisementRepository,
  CrateAdvertisement,
  GetAdvertsQuery,
} from '../interfaces-type/advert.repository.interface';
import { AdvertisementModel } from '../models';

class AdvertisementRepository implements IAdvertisementRepository {
  private defaultGetAdvertsQuery = {
    categories: { $ne: null },
    longitude: { $ne: null },
    latitude: { $ne: null },
    city: { $ne: null },
  };

  constructor(private advertModel: typeof AdvertisementModel) {
    this.advertModel = advertModel;
  }

  public async CarateAdverts(data: CrateAdvertisement) {
    return await this.advertModel.AdvertisementModel.create(data);
  }

  public async GetAdverts(query: GetAdvertsQuery = this.defaultGetAdvertsQuery) {
    return await this.advertModel.AdvertisementModel.find(query);
  }

  public async GetAdvertById(id: string) {
    return await this.advertModel.AdvertisementModel.findById(id);
  }

  public async UpdateAdvert(id: string, data: any) {
    return await this.advertModel.AdvertisementModel.findByIdAndUpdate(id, data);
  }

  public async DeleteAdvert(id: string) {
    return await this.advertModel.AdvertisementModel.findByIdAndDelete(id);
  }
}

export const advertisementRepository = new AdvertisementRepository(AdvertisementModel);
