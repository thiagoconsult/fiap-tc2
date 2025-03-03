import { env } from '@/config/envSchema';
import { FastifyJWTOptions } from '@fastify/jwt';

export const fastifyJWTOptions: FastifyJWTOptions = {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '10m',
  },
};
