import { filmDetailsApi } from '@features/films/detailsModal/api/detailsApi';
import { filmsBySearchApi } from '@features/films/search/api/filmSearchApi';
import { combineReducers } from '@reduxjs/toolkit';
import { filmsApi } from '@widgets/films/api/filmsApi';
import searchHistoryReducer from '@features/films/search/model/searchHistorySlice';
import movieFavoriteReducer from '@entities/film/model/movieFavoriteSlice';

export const rootReducer = combineReducers({
  movieFavorite: movieFavoriteReducer,
  searchHistory: searchHistoryReducer,
  [filmsApi.reducerPath]: filmsApi.reducer,
  [filmsBySearchApi.reducerPath]: filmsBySearchApi.reducer,
  [filmDetailsApi.reducerPath]: filmDetailsApi.reducer,
});
