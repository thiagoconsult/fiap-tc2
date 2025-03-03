import { Unauthorized } from '@/errors/unauthorized';
import { FastifyRequest } from 'fastify';

export const jwtValidade = async (req: FastifyRequest) => {
  const chosenRoute = `${req.method}${req.routeOptions.url}`;
  const freeRoutes = ['POST/user', 'POST/login'];

  if (freeRoutes.includes(chosenRoute)) return;

  try {
    await req.jwtVerify();
  } catch (error) {
    console.info(`Unauthorized, ${error}`);
    throw new Unauthorized();
  }
};
