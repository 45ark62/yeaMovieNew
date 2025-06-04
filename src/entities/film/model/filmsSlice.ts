/*import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Film } from '../../../shared/types';

interface FilmsState {
  films: Film[];
}
const initialState: FilmsState = {
  films: [],
};
export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getFilms: (state, action: PayloadAction<FilmsState>) => {
      state.films = action.payload;
    },
  },
});
export const { getFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
*/