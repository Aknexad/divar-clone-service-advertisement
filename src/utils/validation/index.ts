import { z } from 'zod';

class ValidationSchema {
  public CrateAdvertsSchema = z.object({
    body: z.object({
      title: z.string().min(3).max(20),
      description: z.string().min(3).max(500),
      condition: z.string(),
      inStockCount: z.number(),
      price: z.number(),
      categories: z.string().array().nonempty(),
      images: z.string().array().nonempty(),
      longitude: z.string().optional(),
      latitude: z.string().optional(),
      city: z.string(),
      Neighborhood: z.string(),
    }),
  });
}

export const validationSchema = new ValidationSchema();
