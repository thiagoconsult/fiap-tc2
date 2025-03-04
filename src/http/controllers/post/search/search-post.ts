import { FastifyReply, FastifyRequest } from 'fastify';
import { searchPostSchema } from './search-post-schema';
import { searchPostFactory } from '@/use-cases/post/search/search-post-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const search = async (req: FastifyRequest, res: FastifyReply) => {
  const { term } = searchPostSchema.querystring.parse(req.query);

  const searchPostUseCase = searchPostFactory();

  const posts = await searchPostUseCase.handler(term);

  if (!posts?.length) {
    throw new ResourceNotFound();
  }

  res.send(posts);
};
