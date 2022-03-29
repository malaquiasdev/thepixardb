import { findMoviesBy, findMovieBy } from './repository';
import { MovieDTO, MovieListDTO } from './movies';

function _getImageUrl(images, ratio: string, language: string): string {
  const image = images.find(image => image.key === language && image.path.includes(`/${ratio}/${language}`));

  if (image) {
    return image.path;
  }

  return '';
}

export async function findMovies(tableName: string, language = 'en'): Promise<MovieListDTO[]> {
  const movies = await findMoviesBy(tableName, language);
  return movies.map(m => {
    return {
      id: m.pk,
      title: m.title,
      description: m.descriptionShort,
      releaseDate: m.releaseDate,
      runtime: m.runtime,
      posterUrl: _getImageUrl(m.images, '2_3', language),
      bannerUrl: _getImageUrl(m.images, '16_9', language),
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
