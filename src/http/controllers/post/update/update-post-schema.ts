import z from 'zod';

export const updatePostSchema = {
  description: 'Update post',
  summary: 'Update post',
  tags: ['post'],
  security: [{ bearerAuth: [] }],
  params: z.object({
    id: z.string().uuid(),
  }),
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
  }),
  response: {
    200: z.object({
      id: z.string().uuid(),
      title: z.string(),
      content: z.string(),
      created_at: z.coerce.date(),
      updated_at: z.union([z.coerce.date().nullable(), z.null()]),
    }),
    404: z.object({
      mesage: z.string(),
    }),
  },
};
