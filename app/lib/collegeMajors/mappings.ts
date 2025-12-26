import { CollegeMajor } from '../definitions';
import { collegeMajorArraySchema } from './schemas';

export const mapToCollegeMajorsArray = async (
  data: unknown
): Promise<CollegeMajor[]> => {
  try {
    return collegeMajorArraySchema.parse(data);
  } catch {
    throw new Error(
      'Invalid CollegeMajor data: Data does not match expected schema'
    );
  }
};
