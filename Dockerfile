FROM node:14.19-alpine as api
WORKDIR /usr/src/app
ENV NODE_ENV=local
COPY . .
RUN yarn install

FROM base as database
RUN apk update && apk add git
WORKDIR /usr/src/database
RUN git clone https://github.com/malaquiasdev/thepixardb-wall-e.git .
ENV NODE_ENV=local
RUN yarn install