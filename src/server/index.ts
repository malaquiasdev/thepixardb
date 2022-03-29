import dotenv from 'dotenv';
import fastify from 'fastify';
import blippPlugin from 'fastify-blipp';
import swaggerPlugin from 'fastify-swagger';
import { swaggerConfig } from './plugins/swagger';
import langagueRouter from '../domain/languages/router';
import movieRouter from '../domain/movies/router';

const server = fastify();
dotenv.config();

const address = process.env.HTTP_ADDRESS || '127.0.0.1';
const port = process.env.HTTP_PORT || 8000;
const routerPrefix = '/api/v0';

server.register(swaggerPlugin, swaggerConfig);
server.register(blippPlugin);
server.register(langagueRouter, { prefix: routerPrefix });
server.register(movieRouter, { prefix: routerPrefix });

if (require.main === module) {
  server.listen(port, address, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`🚀 Server listening at ${address}`);
    console.log(`🏷️  Swagger Router  ${swaggerConfig.routePrefix}`);
    server.swagger();
    server.blipp();
  });
} else {
  module.exports = server;
}
