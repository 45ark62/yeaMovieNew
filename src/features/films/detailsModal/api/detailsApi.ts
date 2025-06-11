
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {  FilmsDeteils } from '@shared/types';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_FILMS_API_KEY;

export const filmDetailsApi = createApi({
  reducerPath: 'filmDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilmDetails: builder.query<FilmsDeteils, string|undefined>({
      query: (id) =>
        `/movie/${id}` 
    }),
  }),
});

export const { useGetFilmDetailsQuery } =filmDetailsApi;
