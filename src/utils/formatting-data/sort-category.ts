type Category = {
  _id: string;
  name: string;
  parentId: string | null;
};

// export const sortCategories = (arr: Category[], parentId: string | null = null) => {
//   if (arr.length === 0) return [];
//   let result: any = arr
//     .filter(item => item.parentId === parentId)
//     .map(child => ({
//       _id: child._id,
//       name: child.name,
//       subCategories: sortCategories(arr, child._id),
//     }));

//   return result;
// };

export const sortCategories = (arr: Category[], parentId: string | null = null) => {
  if (arr.length === 0) return [];
  let result: any = arr
    .filter((item: any) => item.parentId === parentId)
    .map((child: any) => createCategoryObject(arr, child));

  return result;
};

const createCategoryObject = (arr: any, child: any) => {
  return {
    _id: child._id,
    name: child.name,
    subCategories: sortCategories(arr, child._id),
  };
};
