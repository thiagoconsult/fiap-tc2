import z from 'zod';

export const removePostSchema = {
  description: 'Remove post',
  summary: 'Remove post',
  tags: ['post'],
  security: [{ bearerAuth: [] }],
  params: z.object({
    id: z.string().uuid(),
  }),
  response: {
    200: z.object({
      id: z.string().uuid(),
    }),
    404: z.object({
      mesage: z.string(),
    }),
  },
};
