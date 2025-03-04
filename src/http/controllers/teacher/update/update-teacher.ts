import { FastifyReply, FastifyRequest } from 'fastify';
import { updateTeacherSchema } from './update-teacher-schema';
import { updateTeacherFactory } from '@/use-cases/teacher/update/update-teacher-factory';
import { ResourceNotFound } from '@/errors/resource-not-found';

export const update = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = updateTeacherSchema.params.parse(req.params);
  const { name } = updateTeacherSchema.body.parse(req.body);

  const updateTeacherUseCase = updateTeacherFactory();

  const teacher = await updateTeacherUseCase.handler(id, name);

  if (!teacher) {
    throw new ResourceNotFound();
  }

  return res.send(teacher);
};
