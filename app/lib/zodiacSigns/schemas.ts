import { z } from 'zod';

export const zodiacSignSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().optional(),
});

export const zodiacSignArraySchema = z.array(zodiacSignSchema);
