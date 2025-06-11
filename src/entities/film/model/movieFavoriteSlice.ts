import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilmsDeteils } from '@shared/types';



interface MovieFavoriteState {
  movieFavorite: FilmsDeteils[];
}

const initialState: MovieFavoriteState = {
  movieFavorite: [],
};

export const movieFavoriteSlice = createSlice({
  name: 'movieFavorite',
  initialState,
  reducers: {
   setFavoriteMovie: (state, action: PayloadAction<FilmsDeteils[]>) => {
      state.movieFavorite = action.payload;
    },
    addFavoriteMovie: (state, action: PayloadAction<FilmsDeteils >) => {
      const movie = action.payload;
      const exists = state.movieFavorite.some((item) => item.id === movie.id);
      if (!exists) {
        state.movieFavorite.unshift(movie);
      }
      console.log(state.movieFavorite);
    },
    removeFavoriteMovie: (state, action: PayloadAction<string | number>) => {
      const movieId = action.payload;
      state.movieFavorite = state.movieFavorite.filter((item) => item.id !== movieId);
    },
    clearFavoriteMovies: (state) => {
      state.movieFavorite = [];
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie, clearFavoriteMovies, setFavoriteMovie } =
  movieFavoriteSlice.actions;

export default movieFavoriteSlice.reducer;
