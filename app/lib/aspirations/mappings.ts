import { Aspiration } from '../definitions';
import { aspirationArraySchema, aspirationSchema } from './schemas';

export const mapToAspirationsArray = async (
  data: unknown
): Promise<Aspiration[]> => {
  try {
    return aspirationArraySchema.parse(data);
  } catch (error) {
    throw new Error('Invalid Aspiration data');
  }
};

export const mapToAspiration = async (data: unknown): Promise<Aspiration> => {
  try {
    console.log(JSON.stringify(data));
    return aspirationSchema.parse(data);
  } catch (error) {
    throw new Error('Invalid Aspiration data');
  }
};
