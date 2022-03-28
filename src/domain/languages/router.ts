import fp from 'fastify-plugin';
import { languageController } from './controller';
import { schema } from './schema';

export default fp(async (server, _, next) => {
  server.route({
    url: '/languages',
    logLevel: 'warn',
    method: ['GET', 'HEAD', 'OPTIONS'],
    handler: languageController,
    schema,
  });
  next();
});
