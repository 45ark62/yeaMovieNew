import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Film } from '@shared/types';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_FILMS_API_KEY;
interface FilmsResponse {
  docs: Film[];
  total: number;
  limit: number;
  page: number;
  pages:number;
}
export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<FilmsResponse, number>({
      query: (page = 1) =>
        `/movie?page=${page}&limit=24` +
        `&selectFields=id` +
        `&selectFields=name` +
        `&selectFields=year` +
        `&selectFields=rating` +
        `&selectFields=movieLength` +
        `&selectFields=seriesLength` +
        `&selectFields=poster` +
        `&notNullFields=name` +
        `&notNullFields=year` +
        `&lists=top250` +
        `&notNullFields=poster.url`,
    }),
  }),
});

export const { useGetFilmsQuery } = filmsApi;
