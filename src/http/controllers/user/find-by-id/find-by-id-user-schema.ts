import z from 'zod';

export const findByIdUserSchema = {
  description: 'Find by id user',
  summary: 'Find by id user',
  tags: ['user'],
  security: [{ bearerAuth: [] }],
  params: z.object({
    id: z.coerce.number(),
  }),
  response: {
    201: z.object({
      id: z.coerce.number(),
      username: z.string(),
      created_at: z.coerce.date(),
      updated_at: z.union([z.coerce.date().nullable(), z.null()]),
    }),
    400: z.object({
      mesage: z.string(),
    }),
    404: z.object({
      mesage: z.string(),
    }),
  },
};
