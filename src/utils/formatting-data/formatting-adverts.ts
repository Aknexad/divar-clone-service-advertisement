import { IImageLink, IFormattingAdvertsInput } from '../interface';

export const formattingAdvertOnResult = (
  advert: IFormattingAdvertsInput[],
  imagesLink: IImageLink[]
) => {
  return advert.map(element => {
    const matchingImageLink = imagesLink.find(link => link._id === element.id);

    if (matchingImageLink) {
      element.images = matchingImageLink.links;
    }
    return element;
  });
};
