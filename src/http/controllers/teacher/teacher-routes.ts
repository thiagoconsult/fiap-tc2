import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { createTeacherSchema } from './create/create-teacher-schema';
import { create } from './create/create-teacher';
import { findAllTeacherSchema } from './find-all/find-all-teacher-schema';
import { findAll } from './find-all/find-all-teacher';
import { findByIdTeacherSchema } from './find-by-id/find-by-id-teacher-schema';
import { findById } from './find-by-id/find-by-id-teacher';
import { updateTeacherSchema } from './update/update-teacher-schema';
import { update } from './update/update-teacher';
import { removeTeacherSchema } from './remove/remove-teacher-schema';
import { remove } from './remove/remove-teacher';

export const teacherRoutes = async (app: FastifyInstance) => {
  app.after(() => {
    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/teacher',
      schema: findAllTeacherSchema,
      handler: findAll,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/teacher/:id',
      schema: findByIdTeacherSchema,
      handler: findById,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'PUT',
      url: '/teacher/:id',
      schema: updateTeacherSchema,
      handler: update,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'DELETE',
      url: '/teacher/:id',
      schema: removeTeacherSchema,
      handler: remove,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'POST',
      url: '/teacher',
      schema: createTeacherSchema,
      handler: create,
    });
  });
};
