export interface Film {
  id: number;
  name: string;
  year: number;
  rating: number;
  movieLength: number;
  seriesLength: number;
  poster: {
    url: string;
    previewUrl: string;
  };
}