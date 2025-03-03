import z from 'zod';

export const updateUserSchema = {
  description: 'Update user',
  summary: 'Update user',
  tags: ['user'],
  security: [{ bearerAuth: [] }],
  params: z.object({
    id: z.coerce.number(),
  }),
  body: z.object({
    password: z.string(),
  }),
  response: {
    200: z.object({
      id: z.coerce.number(),
      username: z.string(),
      created_at: z.coerce.date(),
      updated_at: z.coerce.date(),
    }),
  },
};
