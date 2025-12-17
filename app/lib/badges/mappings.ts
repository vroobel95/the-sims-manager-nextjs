import { Badge } from '../definitions';
import { badgeArraySchema } from './schemas';

export const mapToBadgesArray = async (data: unknown): Promise<Badge[]> => {
  try {
    return badgeArraySchema.parse(data);
  } catch {
    throw new Error('Invalid Badge data: Data does not match expected schema');
  }
};
