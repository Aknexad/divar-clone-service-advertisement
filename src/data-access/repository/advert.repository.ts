import {
  IAdvertisementRepository,
  CrateAdvertisement,
  GetAdvertsQuery,
} from '../interfaces-type/advert.repository.interface';
import { AdvertisementModel } from '../models';

class AdvertisementRepository implements IAdvertisementRepository {
  private defaultGetAdvertsQuery = {
    longitude: { $ne: null },
    latitude: { $ne: null },
    city: { $ne: null },
  };

  constructor(private advertModel: typeof AdvertisementModel) {
    this.advertModel = advertModel;
  }

  public async CreateAdverts(data: CrateAdvertisement) {
    const createdAdvert = await this.advertModel.AdvertisementModel.create(data);

    return createdAdvert;
  }

  public async GetAdverts(query: GetAdvertsQuery = this.defaultGetAdvertsQuery) {
    return await this.advertModel.AdvertisementModel.aggregate([
      {
        $match: {
          longitude: query.longitude,
          latitude: query.latitude,
          city: query.city,
        },
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'categories',
          foreignField: '_id',
          as: 'result',
        },
      },
      {
        $project: {
          _id: '$_id',
          userId: '$userId',
          title: '$title',
          description: '$description',
          condition: '$condition',
          postAt: '$postAt',
          price: '$price',
          categories: '$result',
          images: '$images',
          city: '$city',
          Neighborhood: '$Neighborhood',
        },
      },
    ]);
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

export { AdvertisementRepository };
