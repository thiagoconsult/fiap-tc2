import { FastifyReply, FastifyRequest } from 'fastify';
import { createPostSchema } from './create-post-schema';
import { createPostFactory } from '@/use-cases/post/create/create-post-factory';

export const create = async (req: FastifyRequest, res: FastifyReply) => {
  const { teacher_id, title, content } = createPostSchema.body.parse(req.body);

  const createPostUseCase = createPostFactory();

  const post = await createPostUseCase.handler({ teacher_id, title, content });

  return res.send(post);
};
