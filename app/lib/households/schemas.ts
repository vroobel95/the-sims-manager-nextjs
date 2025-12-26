import { z } from 'zod';

export const householdSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  round: z.number(),
  funds: z.number(),
  address: z.string().optional().nullable(),
  wealth: z.number().optional().nullable(),
  image_url: z.string().url().optional().nullable(),
  houseId: z.string().uuid().optional(),
  simsIds: z.array(z.string()).optional().default([]),
});

export const simSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

export const householdDetailSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  round: z.number(),
  funds: z.number(),
  address: z.string().optional().nullable(),
  wealth: z.number().optional().nullable(),
  image_url: z.string().url().optional().nullable(),
  assigned_sims: z.array(simSchema).default([]),
});

export const householdArraySchema = z.array(householdSchema);
export const householdDetailArraySchema = z.array(householdDetailSchema);
