//import { FilmsResponse } from '@/shared/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Film } from '@shared/types';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_FILMS_API_KEY;
interface FilmsResponse {
  docs: Film[];
  total: number;
  limit: number;
  page: number;
  query?: string;
  pages: number;
}
export const filmsBySearchApi = createApi({
  reducerPath: 'filmsBySearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilmsBySearch: builder.query<FilmsResponse, { page?: number; query: string }>({
      query: ({ page = 1, query }) =>
        `/movie/search?page=${page}&limit=24` +
        `&selectFields=id` +
        `&selectFields=name` +
        `&selectFields=year` +
        `&selectFields=rating` +
        `&selectFields=movieLength` +
        `&selectFields=seriesLength` +
        `&selectFields=poster` +
        `&query=${query}`,
    }),
  }),
});

export const { useGetFilmsBySearchQuery } = filmsBySearchApi;
