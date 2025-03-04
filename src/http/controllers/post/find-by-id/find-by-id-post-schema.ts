import z from 'zod';

export const findByIdPostSchema = {
  description: 'Find by id',
  summary: 'Find by id',
  tags: ['post'],
  params: z.object({
    id: z.string().uuid(),
  }),
  response: {
    200: z.object({
      id: z.string().uuid(),
      title: z.string(),
      content: z.string(),
      teacher_name: z.string(),
      created_at: z.coerce.date(),
      updated_at: z.union([z.coerce.date().nullable(), z.null()]),
    }),
    404: z.object({
      mesage: z.string(),
    }),
  },
};
