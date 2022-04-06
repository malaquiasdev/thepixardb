import { listAllowedLanguages } from '../../../src/domain/languages/service';

describe('listAllowedLanguages', () => {
  it('should return an array of languages', () => {
    const result = listAllowedLanguages();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });
  it('should return an array of languages with key and description', () => {
    const result = listAllowedLanguages();
    expect(result[0]).toHaveProperty('key');
    expect(result[0]).toHaveProperty('description');
  });
  it('should return an array if english and portuguese keys', () => {
    const result = listAllowedLanguages();
    expect(result[0].key).toBe('en');
    expect(result[1].key).toBe('pt');
  });
});
