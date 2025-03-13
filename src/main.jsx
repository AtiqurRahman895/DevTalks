import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import Base from './components/BaseComponents/Base';
import Home from './components/HomeComponents/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './components/ErrorPageComponent/ErrorPage';
//import Login from './components/AuthenticationComponents/Login';
import SignInAndSignUp from './components/AuthenticationComponents/SignInAndSignUp';
import Questions from './components/QuestionsPageComponents.jsx/Questions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/questions",
        element: (
            <Questions />
        ),
      },

      // Authentication
      {
        path: "/login",
        element: <SignInAndSignUp />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        {/* <AuthProvider> */}
          <ToastContainer position="top-center" />
          <RouterProvider router={router} />
        {/* </AuthProvider> */}
      </HelmetProvider>
    </QueryClientProvider>
  // </StrictMode>
);
