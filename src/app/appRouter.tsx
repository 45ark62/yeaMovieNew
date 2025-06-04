import { createBrowserRouter, Navigate } from 'react-router-dom';
import Favorites from '../pages/favorites/ui/Favorites';
import History from '../pages/history/ui/History';
import Main from '../pages/main/ui/Main';
import NotFound from '../pages/not-found/ui/NotFound';
import BaseLayout from './layouts/BaseLayout';

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
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
]);
