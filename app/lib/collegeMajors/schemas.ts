import { z } from 'zod';

export const collegeMajorSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().optional(),
});

export const collegeMajorArraySchema = z.array(collegeMajorSchema);
