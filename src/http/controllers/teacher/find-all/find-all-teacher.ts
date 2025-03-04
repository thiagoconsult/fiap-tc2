import { FastifyReply, FastifyRequest } from 'fastify';
import { findAllTeacherSchema } from './find-all-teacher-schema';
import { findAllTeacherFactory } from '@/use-cases/teacher/find-all/find-all-teacher-factory';

export const findAll = async (req: FastifyRequest, res: FastifyReply) => {
  const { page, limit } = findAllTeacherSchema.querystring.parse(req.query);

  const findAllTeacherUseCase = findAllTeacherFactory();

  const teachers = await findAllTeacherUseCase.handler(page, limit);

  return res.send(teachers);
};
