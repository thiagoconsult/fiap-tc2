import z from 'zod';

export const loginUserSchema = {
  description: 'Login',
  summary: 'Login',
  tags: ['user'],
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
  response: {
    200: z.object({
      token: z.string().jwt(),
    }),
    401: z.object({
      mesage: z.string(),
    }),
  },
};
