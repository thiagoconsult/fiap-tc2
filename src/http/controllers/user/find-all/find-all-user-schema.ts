import z from 'zod';

export const findAllUserSchema = {
  description: 'Find all user',
  summary: 'Find all user',
  tags: ['user'],
  security: [{ bearerAuth: [] }],
  querystring: z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  }),
  response: {
    200: z
      .object({
        id: z.coerce.number(),
        username: z.string(),
        created_at: z.coerce.date(),
        updated_at: z.union([z.coerce.date().nullable(), z.null()]),
      })
      .array()
      .describe('List users'),
  },
};
