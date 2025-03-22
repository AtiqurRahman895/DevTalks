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
import Questions from './components/QuestionsPageComponents.jsx/Questions';
import ProfilePage from './components/UserProfileComponents/ProfilePage';
import PfpAllQuestion from './components/UserProfileComponents/ProfileLayout/PfpAllQuestion';
import PfpAllAnswer from './components/UserProfileComponents/ProfileLayout/PfpAllAnswer';
import PfpAllBadges from './components/UserProfileComponents/ProfileLayout/PfpAllBadges';
import BookMark from './components/BookMarks/BookMark';
import QuizComponents from './components/QuizComponents/QuizComponents';
import AskQuestion from './components/AskQuestionComponents/AskQuestion';
import AddBlog from './components/AddBlogComponents/AddBlog';
import SignIn from './components/AuthenticationComponents/SignIn';
import SignUp from './components/AuthenticationComponents/SignUp';

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
        path: "/ask-question",
        element: <AskQuestion />
      },
      {
        path: "/questions",
        element: (
            <Questions />
        ),
      },
      {
        path: "/profile",
        element: (
            <ProfilePage />
        ),
        children:[
          {
            index: true, // This ensures PfpAllQuestion is shown by default
            element: <PfpAllQuestion />,
          },
          {
            path: "/profile/questions",
            element: <PfpAllQuestion />
          },
          {
            path: "/profile/answers",
            element: <PfpAllAnswer />
          },
          {
            path: "/profile/badges",
            element: <PfpAllBadges />
          },
        ]
      },
      {
        path:'/bookMark',
        element: <BookMark></BookMark>
      },
      {
         path:'/quiz',
         element:<QuizComponents></QuizComponents>
      },
      {
        path: "/add-blog",
        element: <AddBlog />
      },

      // Authentication
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
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
