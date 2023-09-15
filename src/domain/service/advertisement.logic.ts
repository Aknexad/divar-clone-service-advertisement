import { IAdvertisementRepository as IRepo } from '../../data-access/interfaces-type';
import {
  IAdvertisementLogics,
  CrateAdvertInput,
  GetAdvertInOutput,
  UpdateAdvertInput,
} from '../interfaces-type';

import {
  AppError,
  namesOfErrors,
  statusCode,
  extractImagesIds,
  formattingAdvertOnResult,
} from '../../utils';

class AdvertisementLogics implements IAdvertisementLogics {
  public async CreateAdvert(data: CrateAdvertInput, repository: IRepo): Promise<void> {
    await repository.CreateAdverts(data);

    return;
  }

  public async GetAdverts(
    query: any,
    repository: IRepo
  ): Promise<GetAdvertInOutput[] | []> {
    const advert = await repository.GetAdverts(query);

    if (advert.length <= 0) {
      throw new AppError(
        namesOfErrors.notFound,
        statusCode.NOT_FOUND,
        'no advert excite',
        true
      );
    }

    // for each advert get image id
    // @ts-ignore
    const imagesIds = extractImagesIds(advert);
    console.log(
      '🚀 ~ file: advertisement.logic.ts:26 ~ AdvertisementLogics ~ imagesIds:',
      imagesIds
    );

    // get images link form image service
    // const imagesLink =

    const finalAdvert = advert.map(advert => {
      return {
        advertId: advert.id,
        title: advert.title,
        description: advert.description,
        condition: advert.condition,
        inStockCount: advert.inStockCount,
        price: advert.price,
        categories: advert.categories,
        images: advert.images,
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
      throw new AppError(
        namesOfErrors.notFound,
        statusCode.NOT_FOUND,
        'no advert with give id essie',
        true
      );
    }

    // @ts-ignore
    const imageId = extractImagesIds(advert);
    console.log(
      '🚀 ~ file: advertisement.logic.ts:79 ~ AdvertisementLogics ~ imageId:',
      imageId
    );

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

    if (!advert)
      throw new AppError(namesOfErrors.badRequest, statusCode.NOT_FOUND, '', true);

    // send grpc to user service and get user contact
    const contact = { phone: '' };

    return contact;
  }

  public async UpdateAdvert(data: UpdateAdvertInput, repository: IRepo): Promise<void> {
    return;
  }
  public async DeleteAdvert(advertId: string[], repository: IRepo): Promise<void> {}
}

export { AdvertisementLogics };
