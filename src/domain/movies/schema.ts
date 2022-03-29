export const moviesSchema = {
  tags: ['movies'],
  description: 'Get the primary information about a movie.',
  querystring: {
    type: 'object',
    additionalProperties: false,
    properties: {
      language: {
        type: 'string',
        description: 'Pass a ISO 639-1 value to display translated data for the fields that support it.',
        default: 'en',
        enum: ['en', 'pt'],
      },
      genre: {
        type: 'string',
      },
    },
  },
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          description: { type: 'string' },
          releaseYear: { type: 'string' },
          runtime: { type: 'number' },
          posterUrl: { type: 'string' },
          bannerUrl: { type: 'string' },
        },
      },
    },
  },
};

export const movieSchema = {
  tags: ['movies'],
  description: '',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'movie id',
      },
    },
  },
  querystring: {
    type: 'object',
    additionalProperties: false,
    properties: {
      language: {
        type: 'string',
        description: 'Pass a ISO 639-1 value to display translated data for the fields that support it.',
        default: 'en',
        enum: ['en', 'pt'],
      },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
        releaseYear: { type: 'string' },
        runtime: { type: 'number' },
        poster: {
          type: 'object',
          properties: {
            width: { type: 'integer' },
            height: { type: 'integer' },
            url: { type: 'string' },
          },
        },
      },
    },
  },
};
