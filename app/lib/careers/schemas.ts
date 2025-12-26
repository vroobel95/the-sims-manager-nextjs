import { z } from 'zod';

export const careerSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().optional(),
});

export const careerArraySchema = z.array(careerSchema);
