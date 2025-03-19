import { z } from 'zod';
import { Aspiration } from '../definitions';

const aspirationSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().nullable().optional(),
});

const aspirationArraySchema = z.array(aspirationSchema);

export const mapToAspirationsArray = async (
  data: unknown
): Promise<Aspiration[]> => {
  console.log('Received data:', data);
  try {
    return aspirationArraySchema.parse(data);
  } catch (error) {
    console.error('Invalid Aspiration data', data);
    return [];
  }
};
