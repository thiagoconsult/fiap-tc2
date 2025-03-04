import z from 'zod';

export const createPostSchema = {
  description: 'Create a new post',
  summary: 'Create a new post',
  tags: ['post'],
  security: [{ bearerAuth: [] }],
  body: z.object({
    teacher_id: z.coerce.number(),
    title: z.string().default('What is Lorem Ipsum?'),
    content: z
      .string()
      .default(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      ),
  }),
  response: {
    201: z.object({
      id: z.string().uuid(),
      title: z.string(),
      created_at: z.coerce.date(),
    }),
    400: z.object({
      mesage: z.string(),
    }),
  },
};
