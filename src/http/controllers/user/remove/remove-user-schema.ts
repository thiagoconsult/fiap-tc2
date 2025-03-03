import z from 'zod';

export const removeUserSchema = {
  description: 'Remove user',
  summary: 'Remove user',
  tags: ['user'],
  security: [{ bearerAuth: [] }],
  params: z.object({
    id: z.coerce.number(),
  }),
  response: {
    200: z.object({
      id: z.coerce.number(),
    }),
  },
};
