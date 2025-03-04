import { FastifyReply, FastifyRequest } from 'fastify';
import { createTeacherSchema } from './create-teacher-schema';
import { createTeacherFactory } from '@/use-cases/teacher/create/create-teacher-factory';

export const create = async (req: FastifyRequest, res: FastifyReply) => {
  const { user_id, name } = createTeacherSchema.body.parse(req.body);

  const createTeacherUseCase = createTeacherFactory();

  const teacher = await createTeacherUseCase.handler({ user_id, name });

  return res.status(201).send(teacher);
};
