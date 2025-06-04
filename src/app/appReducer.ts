import { combineReducers } from '@reduxjs/toolkit';
import { filmsApi } from '@widgets/films/api/filmsApi';



export const rootReducer = combineReducers({
  //favoriteFilms: favoriteFilmsReducer,
  [filmsApi.reducerPath]: filmsApi.reducer,
});
