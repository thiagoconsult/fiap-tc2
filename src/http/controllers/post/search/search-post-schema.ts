import z from 'zod';

export const searchPostSchema = {
  description: 'Search post',
  summary: 'Search post',
  tags: ['post'],
  querystring: z.object({
    term: z.string(),
  }),
  response: {
    200: z
      .object({
        id: z.string().uuid(),
        title: z.string(),
        content: z.string(),
        teacher_name: z.string(),
        created_at: z.coerce.date(),
        updated_at: z.union([z.coerce.date().nullable(), z.null()]),
      })
      .array(),
    404: z.object({
      mesage: z.string(),
    }),
  },
};
