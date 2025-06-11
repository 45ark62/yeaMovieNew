import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const MAX_HISTORY = 10;
interface SearchHistoryState {
  searchHistory: string[];
}

const initialState: SearchHistoryState = {
  searchHistory: [],
};

export const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    setSearchHistory: (state, action: PayloadAction<string[]>) => {
      state.searchHistory = action.payload;
    },
    addSearchTerm: (state, action: PayloadAction<string>) => {
      const term = action.payload;
      if (!term) return;

      state.searchHistory = state.searchHistory.filter((item) => item !== term);

      state.searchHistory.unshift(term);

      if (state.searchHistory.length > MAX_HISTORY) {
        state.searchHistory = state.searchHistory.slice(0, MAX_HISTORY);
      }
    },
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },
  },
});

export const { setSearchHistory, addSearchTerm, clearSearchHistory } = searchHistorySlice.actions;

export default searchHistorySlice.reducer;
