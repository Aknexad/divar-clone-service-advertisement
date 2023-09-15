export interface IExtractImagesIds {
  _id: string;
  imageIds: string[];
}

export interface IImageLink {
  _id: string;
  links: string[];
}

export interface IFormattingAdvertsInput {
  id: string;
  userId: string;
  title: string;
  description: string;
  condition: string;
  postAt: number;
  confirmed: boolean;
  inStockCount: number;
  price: number;
  categories: any[];
  images: string[];
  longitude?: string;
  latitude?: string;
  city: string;
  Neighborhood: string;
}
