import { z } from 'zod';

export const hobbySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

export const hobbyArraySchema = z.array(hobbySchema);
