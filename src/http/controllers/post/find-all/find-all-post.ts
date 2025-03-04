import { FastifyReply, FastifyRequest } from 'fastify';
import { findAllPostSchema } from './find-all-post-schema';
import { findAllPostFactory } from '@/use-cases/post/find-all/find-all-post-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const findAll = async (req: FastifyRequest, res: FastifyReply) => {
  const { page, limit } = findAllPostSchema.querystring.parse(req.query);

  const findAllPostUseCase = findAllPostFactory();

  const posts = await findAllPostUseCase.handler(page, limit);

  if (!posts) {
    throw new ResourceNotFound();
  }

  return res.send(posts);
};
