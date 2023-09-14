import { AdvertisementLogics } from '../src/domain/service';

const advertisementLogics = new AdvertisementLogics();

describe('testing crating advert method', () => {
  it('should create an advertisement when valid input data is provided', async () => {
    // Arrange
    const data = {
      userId: 'user123',
      title: 'Test Advertisement',
      description: 'This is a test advertisement',
      condition: 'New',
      inStockCount: 10,
      price: 100,
      categories: ['Electronics'],
      images: ['image1.jpg', 'image2.jpg'],
      longitude: '123.456',
      latitude: '78.910',
      city: 'Test City',
      Neighborhood: 'Test Neighborhood',
    };

    const repositoryMock = {
      CreateAdverts: jest.fn().mockResolvedValue(''),
      GetAdverts: jest.fn(),
      GetAdvertById: jest.fn(),
      UpdateAdvert: jest.fn(),
      DeleteAdvert: jest.fn(),
    };

    // Act
    await advertisementLogics.CreateAdvert(data, repositoryMock);

    // Assert
    expect(repositoryMock.CreateAdverts).toHaveBeenCalledWith(data);
  });

  // Tests that the method throws an error if the repository throws an error.
  it('should throw an error when the repository throws an error', async () => {
    // Arrange
    const data = {
      userId: 'user123',
      title: 'Test Advertisement',
      description: 'This is a test advertisement',
      condition: 'New',
      inStockCount: 10,
      price: 100,
      categories: ['Electronics'],
      images: ['image1.jpg', 'image2.jpg'],
      longitude: '123.456',
      latitude: '78.910',
      city: 'Test City',
      Neighborhood: 'Test Neighborhood',
    };

    const repositoryMock = {
      CreateAdverts: jest.fn().mockRejectedValue(new Error('Repository error')),
      GetAdverts: jest.fn(),
      GetAdvertById: jest.fn(),
      UpdateAdvert: jest.fn(),
      DeleteAdvert: jest.fn(),
    };

    // Act and Assert
    await expect(
      advertisementLogics.CreateAdvert(data, repositoryMock)
    ).rejects.toThrowError('Repository error');
  });
});

describe('testing get advert by id method', () => {
  it('should return a valid public advertisement object when given a valid advert id', async () => {
    // Arrange
    const id = 'validId';
    const repository = {
      GetAdvertById: jest.fn().mockResolvedValue({
        id: 'validId',
        title: 'Test Advert',
        description: 'This is a test advert',
        condition: 'نو',
        inStockCount: 10,
        price: 100,
        categories: ['category1', 'category2'],
        images: ['image1', 'image2'],
        longitude: '123.456',
        latitude: '78.910',
        city: 'Test City',
        Neighborhood: 'Test Neighborhood',
      }),
      CreateAdverts: jest.fn(),
      GetAdverts: jest.fn(),
      DeleteAdvert: jest.fn(),
      UpdateAdvert: jest.fn(),
    };

    // Act
    const result = await advertisementLogics.GetAdvertById(id, repository);

    // Assert
    expect(result).toEqual({
      advertId: 'validId',
      title: 'Test Advert',
      description: 'This is a test advert',
      condition: 'نو',
      inStockCount: 10,
      price: 100,
      categories: ['category1', 'category2'],
      images: ['image1', 'image2'],
      longitude: '123.456',
      latitude: '78.910',
      city: 'Test City',
      Neighborhood: 'Test Neighborhood',
    });
    expect(repository.GetAdvertById).toHaveBeenCalledWith(id);
  });

  // Tests that the method returns null when given an invalid advert id
  it('should return null when given an invalid advert id', async () => {
    // Arrange
    const id = 'invalidId';
    const repository = {
      GetAdvertById: jest.fn().mockResolvedValue(null),
      CreateAdverts: jest.fn(),
      GetAdverts: jest.fn(),
      DeleteAdvert: jest.fn(),
      UpdateAdvert: jest.fn(),
    };

    // Act
    const result = await advertisementLogics.GetAdvertById(id, repository);

    // Assert
    expect(result).toBeNull();
    expect(repository.GetAdvertById).toHaveBeenCalledWith(id);
  });

  it('should return a public advertisement object with an empty images array when the advert has no images', async () => {
    // Arrange
    const id = 'validId';
    const repository = {
      CreateAdverts: jest.fn(),
      GetAdverts: jest.fn(),
      DeleteAdvert: jest.fn(),
      UpdateAdvert: jest.fn(),
      GetAdvertById: jest.fn().mockResolvedValue({
        id: 'validId',
        title: 'Test Advert',
        description: 'This is a test advert',
        condition: 'نو',
        inStockCount: 10,
        price: 100,
        categories: ['category1', 'category2'],
        images: [],
        longitude: '123.456',
        latitude: '78.910',
        city: 'Test City',
        Neighborhood: 'Test Neighborhood',
      }),
    };

    // Act
    const result = await advertisementLogics.GetAdvertById(id, repository);

    // Assert
    expect(result).toEqual({
      advertId: 'validId',
      title: 'Test Advert',
      description: 'This is a test advert',
      condition: 'نو',
      inStockCount: 10,
      price: 100,
      categories: ['category1', 'category2'],
      images: [],
      longitude: '123.456',
      latitude: '78.910',
      city: 'Test City',
      Neighborhood: 'Test Neighborhood',
    });
    expect(repository.GetAdvertById).toHaveBeenCalledWith(id);
  });
});

describe('testing ger advert contact', () => {
  it('should return the contact for a valid advertId', async () => {
    // Arrange
    const advertId = 'validAdvertId';

    const repository = {
      GetAdvertById: jest.fn().mockResolvedValue({ userId: 'validUserId' }),
      CreateAdverts: jest.fn(),
      GetAdverts: jest.fn(),
      DeleteAdvert: jest.fn(),
      UpdateAdvert: jest.fn(),
    };

    // Act
    const result = await advertisementLogics.GetAdvertContacts(advertId, repository);

    // Assert
    expect(result).toEqual({ phone: 'validPhoneNumber' });
    expect(repository.GetAdvertById).toHaveBeenCalledWith(advertId);
  });
  // Return null for a non-existent advertId
  it('should return null for a non-existent advertId', async () => {
    // Arrange
    const advertId = 'nonExistentAdvertId';
    const repository = {
      GetAdvertById: jest.fn().mockResolvedValue(null),
      CreateAdverts: jest.fn(),
      GetAdverts: jest.fn(),
      DeleteAdvert: jest.fn(),
      UpdateAdvert: jest.fn(),
    };

    // Act
    const result = await advertisementLogics.GetAdvertContacts(advertId, repository);

    // Assert
    expect(result).toBeNull();
    expect(repository.GetAdvertById).toHaveBeenCalledWith(advertId);
  });
});
