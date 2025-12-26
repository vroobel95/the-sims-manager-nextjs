import { z } from 'zod';
import { BadgeRank } from '../definitions';

const badgeRankMap: Record<number, BadgeRank> = {
  0: BadgeRank.BRONZE,
  1: BadgeRank.SILVER,
  2: BadgeRank.GOLD,
};

export const badgeSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().optional(),
  badge_rank: z.number().transform((val) => {
    const rank = badgeRankMap[val];
    if (!rank) {
      throw new Error(`Invalid badge rank: ${val}`);
    }
    return rank;
  }),
});

export const badgeArraySchema = z.array(badgeSchema);
