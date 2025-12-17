import { z } from 'zod';

export const badgeSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().optional(),
  badge_rank: z.enum(['bronze', 'silver', 'gold']),
});

export const badgeArraySchema = z.array(badgeSchema);
