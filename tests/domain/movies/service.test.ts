import * as repository from '../../../src/domain/movies/repository';
import * as service from '../../../src/domain/movies/service';
import movies from './__mocks__/movies.en.mock.json';

jest.mock('../../../src/domain/movies/repository');

describe('findMovies', () => {
  beforeEach(() => {
    (repository.findMoviesBy as jest.Mock).mockReset();
    (repository.findMovieBy as jest.Mock).mockReset();
    (repository.findMoviesBy as jest.Mock).mockResolvedValue(movies);
    (repository.findMovieBy as jest.Mock).mockResolvedValue(movies[0]);
  });
  it('should return movies', async () => {
    const result = await service.findMovies('tableName', 'en');
    expect(result).toBeInstanceOf(Array);
    expect(result).toMatchSnapshot();
  });
});

describe('findMovie', () => {
  it('should return movie', async () => {
    const result = await service.findMovie('tableName', 'MV508439', 'en');
    expect(result).toBeInstanceOf(Object);
    expect(result).toMatchSnapshot();
  });
});
