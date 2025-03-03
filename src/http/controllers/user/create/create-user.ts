import { FastifyReply, FastifyRequest } from 'fastify';
import { createUserSchema } from './create-user-schema';
import { createUserFactory } from '@/use-cases/user/create/create-user-factory';
import { hash } from 'bcryptjs';

export const createUser = async (req: FastifyRequest, res: FastifyReply) => {
  const { username, password } = createUserSchema.body.parse(req.body);

  const createUserUseCase = createUserFactory();

  const passwordHashed = await hash(password, 8);

  const user = await createUserUseCase.handler({
    username,
    password: passwordHashed,
  });

  return res.status(201).send(user);
};
