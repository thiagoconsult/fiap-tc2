import fastifySwagger from '@fastify/swagger';
import fastify from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';
import { swaggerOptions } from './docs/swagger-options';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { fastifySwaggerUiOptions } from './docs/swagger-ui-options';
import { userRoutes } from './http/controllers/user/user-routes';
import { globalErrorHandler } from './errors/global-error-handler';
import fastifyJwt from '@fastify/jwt';
import { fastifyJWTOptions } from './http/middlewares/jwt/jwt.options';
import fastifyHelmet from '@fastify/helmet';
import fastifyRateLimit from '@fastify/rate-limit';
import { rateLimitOptions } from './http/middlewares/rate-limit/rate-limit-options';
import fastifyCors from '@fastify/cors';
import { fastifyCorsOptions } from './http/middlewares/cors/cors-options';
import { teacherRoutes } from './http/controllers/teacher/teacher-routes';
import { postRoutes } from './http/controllers/post/post-routes';

export const app = fastify();

app.register(fastifyJwt, fastifyJWTOptions);
app.register(fastifyHelmet);
// app.register(fastifyRateLimit, rateLimitOptions);
app.register(fastifyCors, fastifyCorsOptions);

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, fastifySwaggerUiOptions);

app.setErrorHandler(globalErrorHandler);
app.register(userRoutes);
app.register(teacherRoutes);
app.register(postRoutes);
