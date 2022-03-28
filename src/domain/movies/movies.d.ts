type Rate = {
  organ: string;
  value: string;
  key: string;
};

type ExternalId = {
  themoviedb: number;
  imdb: string;
};

type Image = {
  path: string;
  primary: boolean;
  key: string;
};

export type MovieModel = {
  pk: string;
  sk: string;
  title: string;
  descriptionShort: string;
  description: string;
  runtime: number;
  budget: number;
  revenue: number;
  releaseDate: string;
  rating: Rate;
  genres: string[];
  images: Image[];
  updateAt: Date;
  createAt: Date;
};

export type MovieListDTO = {
  id: string;
  title: string;
  description: string;
  runtime: number;
  releaseDate: string;
  posterUrl: string;
  bannerUrl: string;
};

export type MovieDTO = {
  id: string;
  title: string;
  descriptionShort: string;
  description: string;
  runtime: number;
  budget: number;
  revenue: number;
  releaseDate: string;
  rating: Rate;
  genres: string[];
  images: Image[];
};
