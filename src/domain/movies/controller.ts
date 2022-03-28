import { FastifyReply } from 'fastify';
import { findMovies, findMovie } from './service';
import { config } from './config';

export async function moviesController(req: any, reply: FastifyReply): Promise<FastifyReply> {
  const data = await findMovies(config.TABLE_MOVIES, req.query.language);
  return reply
    .headers({
      'Cache-Control': `max-age=${config.CACHE_MAX_AGE}`,
      'Access-Control-Allow-Origin': '*',
    })
    .send(data);
}

export async function movieController(req: any, reply: FastifyReply): Promise<FastifyReply> {
  const data = await findMovie(config.TABLE_MOVIES, req.params.id, req.query.language);
  return reply
    .headers({
      'Cache-Control': `max-age=${config.CACHE_MAX_AGE}`,
      'Access-Control-Allow-Origin': '*',
    })
    .send(data);
}
