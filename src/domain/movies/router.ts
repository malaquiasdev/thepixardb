import { moviesController, movieController } from './controller';
import { moviesSchema, movieSchema } from './schema';

export default function movieRouter(server, _, next) {
  server.route({
    url: '/movies',
    logLevel: 'warn',
    method: ['GET', 'HEAD', 'OPTIONS'],
    handler: moviesController,
    schema: moviesSchema,
  });
  server.route({
    url: '/movies/:id',
    logLevel: 'warn',
    method: ['GET', 'HEAD', 'OPTIONS'],
    handler: movieController,
    schema: movieSchema,
  });
  next();
}
