import z from 'zod';

export const createUserSchema = {
  description: 'Create a new user',
  summary: 'Create a new user',
  tags: ['user'],
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
  response: {
    201: z
      .object({
        id: z.coerce.number(),
        username: z.string(),
        created_at: z.coerce.date(),
      })
      .describe('User created successfully'),
    400: z
      .object({
        mesage: z.string(),
      })
      .describe('Error creating user'),
  },
};
