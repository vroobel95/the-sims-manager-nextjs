import { z } from 'zod';

export const residentialLotSchema = z.object({
  id: z.string().uuid(),
  address: z.string(),
  type: z.string(),
  value: z.number().nonnegative(),
  number_of_bedrooms: z.number().nonnegative(),
  number_of_bathrooms: z.number().nonnegative(),
  neighbourhood_id: z.string().uuid(),
});

export const residentialLotArraySchema = z.array(residentialLotSchema);
