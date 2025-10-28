import { Aspiration } from '../definitions';
import { aspirationArraySchema, aspirationSchema } from './schemas';

export const mapToAspirationsArray = async (
  data: unknown
): Promise<Aspiration[]> => {
  try {
    return aspirationArraySchema.parse(data);
  } catch (error) {
    throw new Error(
      'Invalid Aspiration data: Data does not match expected schema'
    );
  }
};

export const mapToAspiration = async (data: unknown): Promise<Aspiration> => {
  try {
    return aspirationSchema.parse(data);
  } catch {
    throw new Error('Invalid Aspiration data');
  }
};
