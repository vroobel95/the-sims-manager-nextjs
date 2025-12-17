import { z } from 'zod';

export const aspirationSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url(),
});

export const aspirationArraySchema = z.array(aspirationSchema);
