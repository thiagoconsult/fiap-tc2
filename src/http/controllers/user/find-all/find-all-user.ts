import { FastifyReply, FastifyRequest } from 'fastify';
import { findAllUserSchema } from './find-all-user-schema';
import { findAllUserFactory } from '@/use-cases/user/find-all/find-all-user-factory';

export const findAll = async (req: FastifyRequest, res: FastifyReply) => {
  const { page, limit } = findAllUserSchema.querystring.parse(req.query);

  const findAllUserUseCase = findAllUserFactory();

  const users = await findAllUserUseCase.handler(page, limit);

  return res.send(users);
};
