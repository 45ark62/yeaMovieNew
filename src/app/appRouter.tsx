import { createBrowserRouter, Navigate } from 'react-router-dom';
import Favorites from '../pages/favorites/ui/Favorites';
import Main from '../pages/main/ui/Main';
import NotFound from '../pages/not-found/ui/NotFound';
import BaseLayout from './layouts/BaseLayout';
import DetailsOfFilmModal from '@features/films/detailsModal/ui/DetailsOfFilmModal';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/main" replace />,
      },
      {
        path: 'main',
        element: <Main />,
        children: [
          {
            path: 'movies/:id',
            element: <DetailsOfFilmModal />,
          },
        ],
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
]);
