import { FastifyReply, FastifyRequest } from 'fastify';
import { findByIdPostSchema } from './find-by-id-post-schema';
import { findByIdPostFactory } from '@/use-cases/post/find-by-id/find-by-id-post-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const findById = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = findByIdPostSchema.params.parse(req.params);

  const findByIdPostUseCase = findByIdPostFactory();

  const post = await findByIdPostUseCase.handler(id);

  if (!post) {
    throw new ResourceNotFound();
  }

  return res.send(post);
};
