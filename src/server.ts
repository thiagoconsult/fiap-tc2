import { app } from './app';
import { env } from './config/envSchema';

const run = async () => {
  await app.ready();
  await app
    .listen({
      host: '0.0.0.0',
      port: env.PORT,
    })
    .then(() => {
      console.info(`Server started on port #${env.PORT} #${env.ENV}`);
    });
};

run();
