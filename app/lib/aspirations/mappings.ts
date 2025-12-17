import { Aspiration } from '../definitions';
import { aspirationArraySchema } from './schemas';

export const mapToAspirationsArray = async (
  data: unknown
): Promise<Aspiration[]> => {
  try {
    return aspirationArraySchema.parse(data);
  } catch {
    throw new Error(
      'Invalid Aspiration data: Data does not match expected schema'
    );
  }
};
