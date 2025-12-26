import { z } from 'zod';

export const chemistrySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().optional(),
});

export const chemistryArraySchema = z.array(chemistrySchema);
