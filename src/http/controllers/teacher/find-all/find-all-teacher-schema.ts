import z from 'zod';

export const findAllTeacherSchema = {
  description: 'Find all teacher',
  summary: 'Find all teacher',
  tags: ['teacher'],
  querystring: z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  }),
  response: {
    200: z
      .object({
        id: z.coerce.number(),
        name: z.string(),
        username: z.string(),
        created_at: z.coerce.date(),
      })
      .array(),
  },
};
