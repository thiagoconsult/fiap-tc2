import { FastifyReply, FastifyRequest } from 'fastify';
import { removeUserSchema } from './remove-user-schema';
import { removeUserFactory } from '@/use-cases/user/remove/remove-user-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const remove = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = removeUserSchema.params.parse(req.params);

  const removeUserUseCase = removeUserFactory();

  const idRemoved = await removeUserUseCase.handler(id);

  if (!idRemoved) {
    throw new ResourceNotFound();
  }

  return res.send(idRemoved);
};
