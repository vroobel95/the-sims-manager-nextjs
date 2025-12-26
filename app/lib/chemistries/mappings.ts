import { Chemistry } from '../definitions';
import { chemistryArraySchema } from './schemas';

export const mapToChemistriesArray = async (
  data: unknown
): Promise<Chemistry[]> => {
  try {
    return chemistryArraySchema.parse(data);
  } catch {
    throw new Error(
      'Invalid Chemistry data: Data does not match expected schema'
    );
  }
};
