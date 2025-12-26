import { Neighbourhood } from '../definitions';
import { neighbourhoodArraySchema } from './schemas';

export const mapToNeighbourhoodsArray = async (
  data: unknown
): Promise<Neighbourhood[]> => {
  try {
    return neighbourhoodArraySchema.parse(data);
  } catch {
    throw new Error(
      'Invalid Neighbourhood data: Data does not match expected schema'
    );
  }
};
