import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { createPostSchema } from './create/create-post-schema';
import { create } from './create/create-post';
import { findAllPostSchema } from './find-all/find-all-post-schema';
import { findAll } from './find-all/find-all-post';
import { findByIdPostSchema } from './find-by-id/find-by-id-post-schema';
import { findById } from './find-by-id/find-by-id-post';
import { updatePostSchema } from './update/update-post-schema';
import { update } from './update/update-post';
import { removePostSchema } from './remove/remove-post-schema';
import { remove } from './remove/remove-post';
import { jwtValidade } from '@/http/middlewares/jwt/jwt.validate';
import { searchPostSchema } from './search/search-post-schema';
import { search } from './search/search-post';

export const postRoutes = async (app: FastifyInstance) => {
  app.after(() => {
    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/post',
      schema: findAllPostSchema,
      handler: findAll,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/post/:id',
      schema: findByIdPostSchema,
      handler: findById,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'PUT',
      url: '/post/:id',
      schema: updatePostSchema,
      onRequest: jwtValidade,
      handler: update,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'DELETE',
      url: '/post/:id',
      schema: removePostSchema,
      onRequest: jwtValidade,
      handler: remove,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/post/search',
      schema: searchPostSchema,
      handler: search,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'POST',
      url: '/post',
      schema: createPostSchema,
      onRequest: jwtValidade,
      handler: create,
    });
  });
};
