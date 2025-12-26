import { residentialLotArraySchema } from './schemas';

export async function mapToResidentialLotsArray(data: unknown) {
  try {
    const validatedData = await residentialLotArraySchema.parseAsync(data);
    return validatedData;
  } catch (error) {
    console.error('Error mapping residential lots data:', error);
    throw new Error('Failed to map residential lots data');
  }
}
