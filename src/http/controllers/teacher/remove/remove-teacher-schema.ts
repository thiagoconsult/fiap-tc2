import z from 'zod';

export const removeTeacherSchema = {
  description: 'Remove teacher',
  summary: 'Remove teacher',
  tags: ['teacher'],
  params: z.object({
    id: z.coerce.number(),
  }),
  response: {
    200: z.object({
      id: z.coerce.number(),
    }),
    401: z.object({
      mesage: z.string(),
    }),
    404: z.object({
      mesage: z.string(),
    }),
  },
};
