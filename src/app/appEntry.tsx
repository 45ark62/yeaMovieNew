import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { appRouter } from './appRouter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { persistor, store } from './appStore';
import { ToastContainer } from 'react-toastify';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={appRouter} />
        <ToastContainer position='bottom-right' autoClose={5000} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
