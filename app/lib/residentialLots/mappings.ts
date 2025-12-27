import { ResidentialLot, ResidentialLotType } from '../definitions';
import { residentialLotArraySchema } from './schemas';

export async function mapToResidentialLotsArray(
  data: unknown
): Promise<ResidentialLot[]> {
  try {
    const validatedData = await residentialLotArraySchema.parseAsync(data);
    return validatedData.map((lot) => ({
      id: lot.id,
      address: lot.address,
      type: lot.type as ResidentialLotType,
      value: lot.value,
      neighbourhoodId: lot.neighbourhood_id,
      numberOfBedrooms: lot.number_of_bedrooms,
      numberOfBathrooms: lot.number_of_bathrooms,
    }));
  } catch (error) {
    console.error('Error mapping residential lots data:', error);
    throw new Error('Failed to map residential lots data');
  }
}
