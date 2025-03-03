import { FastifyReply, FastifyRequest } from 'fastify';
import { loginUserSchema } from './login-user-schema';
import { loginUserFactory } from '@/use-cases/user/login/login-user-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';
import { compare } from 'bcryptjs';
import { Unauthorized } from '@/errors/unauthorized';

export const login = async (req: FastifyRequest, res: FastifyReply) => {
  const { username, password } = loginUserSchema.body.parse(req.body);

  const loginUserUseCase = loginUserFactory();

  const user = await loginUserUseCase.handler(username);

  if (!user) {
    throw new ResourceNotFound();
  }

  const mathPassword = await compare(password, user.password);

  if (!mathPassword) {
    throw new Unauthorized();
  }

  const token = await res.jwtSign({ username });

  return res.send({ token });
};
