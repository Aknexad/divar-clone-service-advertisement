import { IAdvertisementRepository as IRepo } from '../../data-access/interfaces-type';
import {
  IAdvertisementLogics,
  CrateAdvertInput,
  GetAdvertInOutput,
  UpdateAdvertInput,
} from '../interfaces-type';

import { AppError, namesOfErrors, statusCode } from '../../utility';

class AdvertisementLogics implements IAdvertisementLogics {
  public async CrateAdvert(data: CrateAdvertInput, repository: IRepo): Promise<void> {
    await repository.CarateAdverts(data);

    return;
  }

  public async GetAdvert(
    query: any,
    repository: IRepo
  ): Promise<GetAdvertInOutput[] | []> {
    const advert = await repository.GetAdverts(query);

    // for each advert get image id
    const imagesLink = [''];

    // get images lin form image service

    const finalAdvert = advert.map(advert => {
      return {
        advertId: advert.id,
        title: advert.title,
        description: advert.description,
        condition: advert.condition,
        inStockCount: advert.inStockCount,
        price: advert.price,
        categories: advert.categories,
        images: imagesLink,
        longitude: advert.longitude,
        latitude: advert.latitude,
        city: advert.city,
        Neighborhood: advert.Neighborhood,
      };
    });

    return finalAdvert;
  }

  public async GetAdvertById(
    id: string,
    repository: IRepo
  ): Promise<GetAdvertInOutput | null> {
    const advert = await repository.GetAdvertById(id);

    if (!advert) {
      return null;
    }
    // get image
    const imagesLink = [''];

    const publicAdvert = {
      advertId: advert.id,
      title: advert.title,
      description: advert.description,
      condition: advert.condition,
      inStockCount: advert.inStockCount,
      price: advert.price,
      categories: advert.categories,
      images: imagesLink,
      longitude: advert.longitude,
      latitude: advert.latitude,
      city: advert.city,
      Neighborhood: advert.Neighborhood,
    };

    return publicAdvert;
  }

  public async GetAdvertContacts(
    advertId: string,
    repository: IRepo
  ): Promise<{ phone: string } | null> {
    const advert = await repository.GetAdvertById(advertId);

    if (!advert) new AppError(namesOfErrors.badRequest, statusCode.NOT_FOUND, '', true);

    // send grpc to user service and get user contact

    return { phone: '' };
  }

  public async UpdateAdvert(data: UpdateAdvertInput, repository: IRepo): Promise<void> {
    return;
  }
  public async DeleteAdvert(advertId: string[], repository: IRepo): Promise<void> {}
}

export const advertisementLogics = new AdvertisementLogics();
