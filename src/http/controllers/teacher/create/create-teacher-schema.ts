import z from 'zod';

export const createTeacherSchema = {
  description: 'Create a new teacher',
  summary: 'Create a new teacher',
  tags: ['teacher'],
  body: z.object({
    user_id: z.coerce.number(),
    name: z.string(),
  }),
  response: {
    201: z.object({
      id: z.coerce.number(),
      name: z.string(),
      created_at: z.coerce.date(),
    }),
  },
};
