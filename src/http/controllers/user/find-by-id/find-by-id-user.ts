import { FastifyReply, FastifyRequest } from 'fastify';
import { findByIdUserSchema } from './find-by-id-user-schema';
import { findByIdUserFactory } from '@/use-cases/user/find-by-id/find-by-id-user-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const findById = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = findByIdUserSchema.params.parse(req.params);

  const findByIsUserUseCase = findByIdUserFactory();

  const user = await findByIsUserUseCase.handler(id);

  if (!user) {
    throw new ResourceNotFound();
  }

  return res.send(user);
};
