import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import Base from './components/BaseComponents/Base';
import Home from './components/HomeComponents/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    // errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: (
            <Home />
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <HelmetProvider>
    {/* <AuthProvider> */}
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    {/* </AuthProvider> */}
  </HelmetProvider>
  // </StrictMode>,
)
