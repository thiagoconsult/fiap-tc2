import z from 'zod';

const envSchema = z.object({
  ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PORT: z.coerce.number(),
  POSTGRES_DATABASE: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  JWT_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error(`Environment Variables Error, ${_env.error.format()}`);
  throw new Error(`Environment Variables Error, ${_env.error.format()}`);
}

export const env = _env.data;
