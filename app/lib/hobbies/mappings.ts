import { Hobby } from '../definitions';
import { hobbyArraySchema } from './schemas';

export const mapToHobbiesArray = async (data: unknown): Promise<Hobby[]> => {
  try {
    return hobbyArraySchema.parse(data);
  } catch {
    throw new Error('Invalid Hobby data: Data does not match expected schema');
  }
};
