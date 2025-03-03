import { FastifyReply, FastifyRequest } from 'fastify';
import { updateUserSchema } from './update-user-schema';
import { updateUserFactory } from '@/use-cases/user/update/update-user-factory';
import { hash } from 'bcryptjs';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const update = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = updateUserSchema.params.parse(req.params);
  const { password } = updateUserSchema.body.parse(req.body);

  const updateUserUseCase = updateUserFactory();

  const hashedPassword = await hash(password, 8);

  const user = await updateUserUseCase.handler(id, hashedPassword);

  if (!user) {
    throw new ResourceNotFound();
  }

  return res.send(user);
};
