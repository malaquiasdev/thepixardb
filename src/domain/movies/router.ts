import fp from 'fastify-plugin';
import { moviesController, movieController } from './controller';
import { moviesSchema, movieSchema } from './schema';

export default fp(async (server, _, next) => {
  server.route({
    url: '/movies',
    logLevel: 'warn',
    method: ['GET', 'HEAD', 'OPTIONS'],
    handler: moviesController,
    moviesSchema,
  });
  server.route({
    url: '/movies/:id',
    logLevel: 'warn',
    method: ['GET', 'HEAD', 'OPTIONS'],
    handler: movieController,
    movieSchema,
  });
  next();
});
