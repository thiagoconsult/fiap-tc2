import { FastifyReply, FastifyRequest } from 'fastify';
import { findByIdTeacherSchema } from './find-by-id-teacher-schema';
import { findByIdTeacherFactory } from '@/use-cases/teacher/find-by-id/find-by-id-teacher-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const findById = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = findByIdTeacherSchema.params.parse(req.params);

  const findByIdTeacherUseCase = findByIdTeacherFactory();

  const teacher = await findByIdTeacherUseCase.handler(id);

  if (!teacher) {
    throw new ResourceNotFound();
  }

  return res.send(teacher);
};
