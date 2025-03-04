import { FastifyReply, FastifyRequest } from 'fastify';
import { ResourceNotFound } from '@/errors/resource-not-found';
import { removeTeacherSchema } from './remove-teacher-schema';
import { removeTeacherFactory } from '@/use-cases/teacher/remove/remove-teacher-factory';

export const remove = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = removeTeacherSchema.params.parse(req.params);

  const removeTeacherUseCase = removeTeacherFactory();

  const result = await removeTeacherUseCase.handler(id);

  if (!result) {
    throw new ResourceNotFound();
  }

  return res.send(result);
};
