import { Career } from '../definitions';
import { careerArraySchema } from './schemas';

export const mapToCareersArray = async (data: unknown): Promise<Career[]> => {
  try {
    return careerArraySchema.parse(data);
  } catch {
    throw new Error('Invalid Career data: Data does not match expected schema');
  }
};
