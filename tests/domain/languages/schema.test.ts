import { schema } from '../../../src/domain/languages/schema';

describe('schema', () => {
  it('should return an object', () => {
    expect(schema).toBeInstanceOf(Object);
  });
  it('should match with the snapshot', () => {
    expect(schema).toMatchSnapshot();
  });
});
