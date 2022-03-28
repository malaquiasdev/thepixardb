type Image = {
  width: number;
  url: string;
  height: number;
};

export type MovieModel = {
  id: string;
  language: string;
  title: string;
  description: string;
  genres: string;
  adult: boolean;
  originalLanguage: string;
  runtime: number;
  budget: number;
  releaseYear: string;
  revenue?: number;
  updateAt: string;
  createAt: string;
  themoviedbId: number;
  imdbid: string;
  posters: Image[];
};

export type MovieDTO = {
  id: string;
  title: string;
  description: string;
  genres: string[];
  adult: boolean;
  originalLanguage: string;
  runtime: number;
  budget: number;
  releaseYear: string;
  revenue: number;
  posters: Image[];
};

export type MovieListDTO = {
  id: string;
  title: string;
  releaseYear: string;
  banner?: Image;
  poster?: Image;
};
