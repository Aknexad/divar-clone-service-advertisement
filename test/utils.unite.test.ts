import { sortCategories, AppError } from '../src/utils';

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
