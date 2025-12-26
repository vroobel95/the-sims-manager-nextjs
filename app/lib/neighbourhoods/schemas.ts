import { z } from 'zod';

export const neighbourhoodSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().optional(),
});

export const neighbourhoodArraySchema = z.array(neighbourhoodSchema);
