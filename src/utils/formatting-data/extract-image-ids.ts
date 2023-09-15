import { Types } from 'mongoose';
import { IExtractImagesIds, IFormattingAdvertsInput } from '../interface';

type id = string | Types.ObjectId;

export const extractImagesIds = (
  advert: IFormattingAdvertsInput[] | IFormattingAdvertsInput
): IExtractImagesIds | IExtractImagesIds[] => {
  if (advert === null || advert === undefined) {
    throw new Error('Invalid input: advert is null or undefined');
  }

  if (Array.isArray(advert)) {
    return extractImagesIdsFromArray(advert);
  }

  return extractImagesIdsFromObject(advert);
};

const extractImagesIdsFromArray = (
  adverts: IFormattingAdvertsInput[]
): IExtractImagesIds[] => {
  return adverts.map(element => ({
    _id: element.id,
    imageIds: element.images.map((id: id) =>
      typeof id === 'string' ? id : id.toString()
    ),
  }));
};

const extractImagesIdsFromObject = (
  advert: IFormattingAdvertsInput
): IExtractImagesIds => {
  return {
    _id: advert.id,
    imageIds: advert.images.map((id: id) =>
      typeof id === 'string' ? id : id.toString()
    ),
  };
};
