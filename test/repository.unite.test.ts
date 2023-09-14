// import { AdvertisementRepository } from '../src/data-access/repository';

// // Successfully create an advertisement with all required fields
// it('should create an advertisement with all required fields', async () => {
//   // Arrange
//   const data = {
//     userId: '123',
//     title: 'Test Advertisement',
//     description: 'This is a test advertisement',
//     condition: 'New',
//     inStockCount: 10,
//     price: 100,
//     categories: ['category1', 'category2'],
//     images: ['image1', 'image2'],
//     city: 'Test City',
//     Neighborhood: 'Test Neighborhood',
//   };

//   const advertModelMock = {
//     AdvertisementModel: {
//       create: jest.fn().mockResolvedValue(data),
//     },
//   };

//   const advertisementRepository = new AdvertisementRepository(advertModelMock);

//   // Act
//   const result = await advertisementRepository.CreateAdverts(data);

//   // Assert
//   expect(result).toEqual(data);
//   expect(advertModelMock.AdvertisementModel.create).toHaveBeenCalledWith(data);
// });

// // Successfully create an advertisement with only required fields
// it('should create an advertisement with only required fields', async () => {
//   // Arrange
//   const data = {
//     userId: '123',
//     title: 'Test Advertisement',
//     description: 'This is a test advertisement',
//     condition: 'New',
//     inStockCount: 10,
//     price: 100,
//     categories: [],
//     images: [],
//     city: 'Test City',
//     Neighborhood: 'Test Neighborhood',
//   };

//   const advertModelMock = {
//     AdvertisementModel: {
//       create: jest.fn().mockResolvedValue(data),
//     },
//   };

//   const advertisementRepository = new AdvertisementRepository(advertModelMock);

//   // Act
//   const result = await advertisementRepository.CreateAdverts(data);

//   // Assert
//   expect(result).toEqual(data);
//   expect(advertModelMock.AdvertisementModel.create).toHaveBeenCalledWith(data);
// });

// // Throw an error if required fields are missing
// it('should throw an error if required fields are missing', async () => {
//   // Arrange
//   const data: CrateAdvertisement = {
//     userId: '123',
//     title: 'Test Advertisement',
//     description: 'This is a test advertisement',
//     condition: 'New',
//     inStockCount: 10,
//     price: 100,
//     categories: ['category1', 'category2'],
//     images: ['image1', 'image2'],
//     city: 'Test City',
//     Neighborhood: 'Test Neighborhood',
//   };

//   delete data.userId;

//   const advertModelMock = {
//     AdvertisementModel: {
//       create: jest.fn().mockResolvedValue(data),
//     },
//   };

//   const advertisementRepository = new AdvertisementRepository(advertModelMock);

//   // Act and Assert
//   await expect(advertisementRepository.CarateAdverts(data)).rejects.toThrow();
//   expect(advertModelMock.AdvertisementModel.create).not.toHaveBeenCalled();
// });
