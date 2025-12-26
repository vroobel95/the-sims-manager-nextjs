import { LifetimeWant } from '../definitions';
import { lifetimeWantArraySchema } from './schemas';

export const mapToLifetimeWantsArray = async (
  data: unknown
): Promise<LifetimeWant[]> => {
  try {
    return lifetimeWantArraySchema.parse(data);
  } catch {
    throw new Error(
      'Invalid LifetimeWant data: Data does not match expected schema'
    );
  }
};
