import { FastifyReply } from 'fastify';
import { listAllowedLanguages } from './service';

const SEVEN_DAYS_IN_SECONDS = 604800;

export async function languageController(_, reply: FastifyReply) {
  return reply
    .headers({
      'Cache-Control': `max-age=${SEVEN_DAYS_IN_SECONDS}`,
      'Access-Control-Allow-Origin': '*',
    })
    .send(listAllowedLanguages());
}
