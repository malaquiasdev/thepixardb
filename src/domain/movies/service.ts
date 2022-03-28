import { findMoviesBy, findMovieBy } from './repository';
import { MovieDTO, MovieListDTO } from './movies';

export async function findMovies(tableName: string, language = 'en'): Promise<MovieListDTO[]> {
  const movies = await findMoviesBy(tableName, language);
  return movies.map(m => {
    return {
      id: m.pk,
      title: m.title,
      description: m.descriptionShort,
      releaseDate: m.releaseDate,
      runtime: m.runtime,
      posterUrl: m.images.find(i => i.primary && i.key === language && i.path.includes(`/2_3/${language}`)).path,
      bannerUrl: m.images.find(i => i.primary && i.key === language && i.path.includes(`/16_9/${language}`)).path,
    };
  });
}

export async function findMovie(tableName: string, id: string, language = 'en'): Promise<MovieDTO> {
  const movie = await findMovieBy(tableName, id, language);
  return {
    id: movie.pk,
    title: movie.title,
    description: movie.description,
    descriptionShort: movie.descriptionShort,
    genres: movie.genres,
    runtime: movie.runtime,
    budget: movie.budget,
    releaseDate: movie.releaseDate,
    revenue: movie.revenue,
    rating: movie.rating,
    images: movie.images.filter(i => i.primary && i.key === language),
  };
}
