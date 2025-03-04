import z from 'zod';

export const findAllPostSchema = {
  description: 'Find all post',
  summary: 'Find all post',
  tags: ['post'],
  querystring: z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
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
