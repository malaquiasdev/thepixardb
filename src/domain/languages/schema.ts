export const schema = {
  tags: ['languages'],
  description: 'Our languages are standard by ISO 639-1. Default value is en-US.',
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          iso6391: { type: 'string' },
          description: { type: 'string' },
        },
      },
    },
  },
};
