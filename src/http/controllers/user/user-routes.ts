import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { createUser } from './create/create-user';
import { createUserSchema } from './create/create-user-schema';
import { findAllUserSchema } from './find-all/find-all-user-schema';
import { findAll } from './find-all/find-all-user';
import { findByIdUserSchema } from './find-by-id/find-by-id-user-schema';
import { findById } from './find-by-id/find-by-id-user';
import { updateUserSchema } from './update/update-user-schema';
import { update } from './update/update-user';
import { removeUserSchema } from './remove/remove-user-schema';
import { remove } from './remove/remove.user';
import { jwtValidade } from '@/http/middlewares/jwt/jwt.validate';
import { loginUserSchema } from './login/login-user-schema';
import { login } from './login/login-user';

export const userRoutes = async (app: FastifyInstance) => {
  app.after(() => {
    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/user',
      schema: findAllUserSchema,
      handler: findAll,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/user/:id',
      schema: findByIdUserSchema,
      handler: findById,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'PUT',
      url: '/user/:id',
      schema: updateUserSchema,
      handler: update,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'DELETE',
      url: '/user/:id',
      schema: removeUserSchema,
      handler: remove,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'POST',
      url: '/user',
      schema: createUserSchema,
      handler: createUser,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'POST',
      url: '/user/login',
      schema: loginUserSchema,
      handler: login,
    });
  });
};
