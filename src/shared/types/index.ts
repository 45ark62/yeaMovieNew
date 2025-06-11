export interface Film {
  id: number;
  name: string;
  year: number;
  rating: {
    imdb: number;
    kp?: number;
  };
  movieLength: number;
  seriesLength: number;
  poster: {
    url: string;
    previewUrl: string;
  };
}
export interface Persons {
  id: number;
  photo: string;
  name: string;
  enName?: string;
  description?: string;
  profession: string;
  enProfession?: string;
}
interface Genre {
  name: string;
}
interface Country {
  name: string;
}
type ItemWatchability = {
  id?: number | undefined | string;
  name: string;
  logo: { url: string };
  url: string;
};
interface Watchability {
  items: ItemWatchability[];
}
export interface FilmsDeteils {
  id: number;
  name: string;
  year: number;
  movieLength: number;
  seriesLength: number;
  type: string;
  description: string;
  genres: Genre[];
  countries: Country[];
  ageRating: number;
  persons: Persons[];
  poster: {
    url: string;
    previewUrl: string;
  };
  rating: {
    imdb: number;
    kp?: number;
  };
  watchability: Watchability;
}
