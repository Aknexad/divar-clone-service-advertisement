import {
  sortCategories,
  AppError,
  formattingAdvertOnResult,
  extractImagesIds,
} from '../src/utils';

describe('testing sort Category function', () => {
  // Tests that the function returns an empty array when the input array is empty
  it('should return an empty array when the input array is empty', () => {
    const arr: any[] = [];
    const result = sortCategories(arr);
    expect(result).toEqual([]);
  });

  it('should return an array of objects with subCategories as empty array when there are no subCategories', () => {
    const arr = [
      { _id: '1', name: 'Category 1', parentId: null },
      { _id: '2', name: 'Category 2', parentId: null },
      { _id: '3', name: 'Category 3', parentId: null },
    ];
    const result = sortCategories(arr);
    expect(result).toEqual([
      { _id: '1', name: 'Category 1', subCategories: [] },
      { _id: '2', name: 'Category 2', subCategories: [] },
      { _id: '3', name: 'Category 3', subCategories: [] },
    ]);
  });

  // Tests that the function returns an array of objects with subCategories sorted by parentId and then by name
  it('should return an array of objects with subCategories sorted by parentId and then by name', () => {
    const arr = [
      { _id: '1', name: 'Category 1', parentId: null },
      { _id: '2', name: 'Category 2', parentId: '1' },
      { _id: '3', name: 'Category 3', parentId: '1' },
      { _id: '4', name: 'Category 4', parentId: null },
      { _id: '5', name: 'Category 5', parentId: '4' },
      { _id: '6', name: 'Category 6', parentId: '4' },
    ];
    const result = sortCategories(arr);
    expect(result).toEqual([
      {
        _id: '1',
        name: 'Category 1',
        subCategories: [
          { _id: '2', name: 'Category 2', subCategories: [] },
          { _id: '3', name: 'Category 3', subCategories: [] },
        ],
      },
      {
        _id: '4',
        name: 'Category 4',
        subCategories: [
          { _id: '5', name: 'Category 5', subCategories: [] },
          { _id: '6', name: 'Category 6', subCategories: [] },
        ],
      },
    ]);
  });
});

describe('testing AppError Class', () => {
  // Tests that an instance of AppError is created with valid parameters and has the correct properties and values.
  it('should create an instance of AppError with valid parameters', () => {
    // Arrange
    const name = 'TestError';
    const httpCode = 400;
    const description = 'This is a test error';
    const isOperational = true;

    // Act
    const error = new AppError(name, httpCode, description, isOperational);

    // Assert
    expect(error).toBeInstanceOf(AppError);
    expect(error.name).toBe(name);
    expect(error.httpCode).toBe(httpCode);
    expect(error.message).toBe(description);
    expect(error.isOperational).toBe(isOperational);
  });
});

describe('testing formatting adverts', () => {
  it('should return the input array of AdvertisementDocument if imagesLink is an empty array', () => {
    const advert = [
      {
        id: '1',
        userId: '1',
        title: 'Advert 1',
        description: 'Description 1',
        condition: 'نو',
        postAt: 123456789,
        confirmed: true,
        inStockCount: 1,
        price: 100,
        categories: [],
        images: [],
        longitude: '123.456',
        latitude: '78.910',
        city: 'City 1',
        Neighborhood: 'Neighborhood 1',
      },
      {
        id: '2',
        userId: '2',
        title: 'Advert 2',
        description: 'Description 2',
        condition: 'در حد نو',
        postAt: 987654321,
        confirmed: false,
        inStockCount: 2,
        price: 200,
        categories: [],
        images: [],
        longitude: '12.345',
        latitude: '67.890',
        city: 'City 2',
        Neighborhood: 'Neighborhood 2',
      },
    ];

    const imagesLink: any[] = [];

    const result = formattingAdvertOnResult(advert, imagesLink);

    expect(result).toEqual(advert);
  });

  it('should correctly map the links to the corresponding AdvertisementDocument based on _id', () => {
    const advert = [
      {
        id: '1',
        userId: '1',
        title: 'Advert 1',
        description: 'Description 1',
        condition: 'نو',
        postAt: 123456789,
        confirmed: true,
        inStockCount: 1,
        price: 100,
        categories: [],
        images: [],
        longitude: '123.456',
        latitude: '78.910',
        city: 'City 1',
        Neighborhood: 'Neighborhood 1',
      },
      {
        id: '2',
        userId: '2',
        title: 'Advert 2',
        description: 'Description 2',
        condition: 'در حد نو',
        postAt: 987654321,
        confirmed: false,
        inStockCount: 2,
        price: 200,
        categories: [],
        images: [],
        longitude: '12.345',
        latitude: '67.890',
        city: 'City 2',
        Neighborhood: 'Neighborhood 2',
      },
    ];

    const imagesLink = [
      {
        _id: '1',
        links: ['link1', 'link2'],
      },
      {
        _id: '2',
        links: ['link3', 'link4'],
      },
    ];

    const expectedOutput = [
      {
        id: '1',
        userId: '1',
        title: 'Advert 1',
        description: 'Description 1',
        condition: 'نو',
        postAt: 123456789,
        confirmed: true,
        inStockCount: 1,
        price: 100,
        categories: [],
        images: ['link1', 'link2'],
        longitude: '123.456',
        latitude: '78.910',
        city: 'City 1',
        Neighborhood: 'Neighborhood 1',
      },
      {
        id: '2',
        userId: '2',
        title: 'Advert 2',
        description: 'Description 2',
        condition: 'در حد نو',
        postAt: 987654321,
        confirmed: false,
        inStockCount: 2,
        price: 200,
        categories: [],
        images: ['link3', 'link4'],
        longitude: '12.345',
        latitude: '67.890',
        city: 'City 2',
        Neighborhood: 'Neighborhood 2',
      },
    ];

    const result = formattingAdvertOnResult(advert, imagesLink);

    expect(result).toEqual(expectedOutput);
  });
});

describe('testing extract image ids', () => {
  it('should return an array object with _id and imageIds properties when passed array of adverts object', () => {
    const advert = [
      {
        id: '1',
        userId: '1',
        title: 'Advert 1',
        description: 'Description 1',
        condition: 'نو',
        postAt: 123456789,
        confirmed: true,
        inStockCount: 1,
        price: 100,
        categories: [],
        images: ['image 1-1', 'image 1-2'],
        longitude: '123.456',
        latitude: '78.910',
        city: 'City 1',
        Neighborhood: 'Neighborhood 1',
      },
      {
        id: '2',
        userId: '2',
        title: 'Advert 2',
        description: 'Description 2',
        condition: 'در حد نو',
        postAt: 987654321,
        confirmed: false,
        inStockCount: 2,
        price: 200,
        categories: [],
        images: ['image 2-1', 'image 2-2'],
        longitude: '12.345',
        latitude: '67.890',
        city: 'City 2',
        Neighborhood: 'Neighborhood 2',
      },
    ];

    const expectedOutput = [
      {
        _id: '1',
        imageIds: ['image 1-1', 'image 1-2'],
      },
      {
        _id: '2',
        imageIds: ['image 2-1', 'image 2-2'],
      },
    ];

    const result = extractImagesIds(advert);

    expect(result).toEqual(expectedOutput);
  });

  it('should return a object with _id and imageIds properties when passed a single advert object', () => {
    const advert = {
      id: '1',
      userId: '1',
      title: 'Advert 1',
      description: 'Description 1',
      condition: 'نو',
      postAt: 123456789,
      confirmed: true,
      inStockCount: 1,
      price: 100,
      categories: [],
      images: ['image 1-1', 'image 1-2'],
      longitude: '123.456',
      latitude: '78.910',
      city: 'City 1',
      Neighborhood: 'Neighborhood 1',
    };

    const expectedOutput = {
      _id: '1',
      imageIds: ['image 1-1', 'image 1-2'],
    };

    const result = extractImagesIds(advert);

    expect(result).toEqual(expectedOutput);
  });
});
