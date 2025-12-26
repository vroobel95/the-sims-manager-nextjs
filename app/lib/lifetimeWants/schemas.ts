import { z } from 'zod';

export const lifetimeWantSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().optional(),
});

export const lifetimeWantArraySchema = z.array(lifetimeWantSchema);
