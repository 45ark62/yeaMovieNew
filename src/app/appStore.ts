import { filmsApi } from '@widgets/films/api/filmsApi';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './appReducer';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filmsBySearchApi } from '@features/films/search/api/filmSearchApi';
import { filmDetailsApi } from '@features/films/detailsModal/api/detailsApi';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['searchHistory', 'movieFavorite'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(filmsApi.middleware)
      .concat(filmsBySearchApi.middleware)
      .concat(filmDetailsApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
