import { findMoviesBy, findMovieBy } from './repository';
import { MovieDTO, MovieListDTO } from './movies';

export async function findMovies(tableName: string, language?): Promise<MovieListDTO[]> {
  const movies = await findMoviesBy(tableName, language || 'en');
  return movies.map(m => {
    return {
      id: m.id,
      title: m.title,
      description: m.description,
      releaseYear: m.releaseYear,
      runtime: m.runtime,
      //poster: m.posters[0] ? m.posters[0] : { width: 0, height: 0, url: null },
    };
  });
}

export async function findMovie(tableName: string, id: string, language?: string): Promise<MovieDTO> {
  const movie = await findMovieBy(tableName, id, language || 'en-us');
  return {
    id: movie.id,
    title: movie.title,
    description: movie.description,
    genres: movie.genres.split(';'),
    adult: movie.adult,
    originalLanguage: movie.originalLanguage,
    runtime: movie.runtime,
    budget: movie.budget,
    releaseYear: movie.releaseYear,
    revenue: movie.revenue,
    posters: movie.posters,
  };
}
