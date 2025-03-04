import { FastifyReply, FastifyRequest } from 'fastify';
import { removePostSchema } from './remove-post-schema';
import { removePostFactory } from '@/use-cases/post/remove/remove-post-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const remove = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = removePostSchema.params.parse(req.params);

  const removePostUseCase = removePostFactory();

  const post = await removePostUseCase.handler(id);

  if (!post) {
    throw new ResourceNotFound();
  }

  return res.send(post);
};
