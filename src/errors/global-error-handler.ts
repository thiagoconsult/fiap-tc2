import { env } from '@/config/envSchema';
import { FastifyReply, FastifyRequest } from 'fastify';
import { DatabaseError } from 'pg';
import { ZodError } from 'zod';
import { ResourceNotFound } from './resource-not-found';
import { Unauthorized } from './unauthorized';

export const globalErrorHandler = async (
  error: Error,
  req: FastifyRequest,
  res: FastifyReply,
) => {
  if (env.ENV === 'development') {
    console.error(error);
  }

  if (error instanceof ZodError) {
    return res.status(400).send({ mesage: error.format() });
  }

  if (error instanceof DatabaseError) {
    return res.status(400).send({ mesage: error.message });
  }

  if (error instanceof ResourceNotFound) {
    return res.status(404).send({ mesage: error.message });
  }

  if (error instanceof Unauthorized) {
    res.status(401).send({ mesage: error.message });
  }

  if (error instanceof Error) {
    console.error(error);
    return res.status(500).send({ mesage: error.message });
  }
};
