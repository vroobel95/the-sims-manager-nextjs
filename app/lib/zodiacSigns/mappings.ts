import { ZodiacSign } from '../definitions';
import { zodiacSignArraySchema } from './schemas';

export const mapToZodiacSignsArray = async (
  data: unknown
): Promise<ZodiacSign[]> => {
  try {
    return zodiacSignArraySchema.parse(data);
  } catch {
    throw new Error(
      'Invalid ZodiacSign data: Data does not match expected schema'
    );
  }
};
