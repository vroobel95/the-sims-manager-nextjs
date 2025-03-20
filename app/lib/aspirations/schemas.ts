import { z } from 'zod';

export const aspirationSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon_url: z.string().url().optional(),
});

export const aspirationArraySchema = z.array(aspirationSchema);

export const aspirationFormSchema = z.object({
  name: z.string().nonempty('Aspiration name cannot be empty'),
  iconFile: z.any().optional(),
});

export type AspirationFormData = z.infer<typeof aspirationFormSchema>;
