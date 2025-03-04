import z from 'zod';

export const updateTeacherSchema = {
  description: 'Update teacher',
  summary: 'Update teacher',
  tags: ['teacher'],
  params: z.object({
    id: z.coerce.number(),
  }),
  body: z.object({
    name: z.string(),
  }),
  response: {
    200: z.object({
      id: z.coerce.number(),
      name: z.string(),
      created_at: z.coerce.date(),
      updated_at: z.coerce.date(),
    }),
    401: z.object({
      mesage: z.string(),
    }),
    404: z.object({
      mesage: z.string(),
    }),
  },
};
