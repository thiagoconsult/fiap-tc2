import { FastifyReply, FastifyRequest } from 'fastify';
import { updatePostSchema } from './update-post-schema';
import { updatePostFactory } from '@/use-cases/post/update/update-post-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const update = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = updatePostSchema.params.parse(req.params);
  const { title, content } = updatePostSchema.body.parse(req.body);

  const updatePostUseCase = updatePostFactory();

  const post = await updatePostUseCase.handler(id, { title, content });

  if (!post) {
    throw new ResourceNotFound();
  }

  return res.send(post);
};
