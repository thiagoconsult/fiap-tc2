import z from 'zod';

export const findByIdTeacherSchema = {
  description: 'Find by id',
  summary: 'Find by id',
  tags: ['teacher'],
  params: z.object({
    id: z.coerce.number(),
  }),
  response: {
    200: z.object({
      id: z.coerce.number(),
      name: z.string(),
      username: z.string(),
      created_at: z.coerce.date(),
    }),
    401: z.object({
      mesage: z.string(),
    }),
    404: z.object({
      mesage: z.string(),
    }),
  },
};
