import { RateLimitOptions } from '@fastify/rate-limit';

export const rateLimitOptions: RateLimitOptions = {
  max: 10,
  timeWindow: 5000,
};
