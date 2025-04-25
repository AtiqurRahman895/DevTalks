import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Base from "./components/BaseComponents/Base";
import Home from "./components/HomeComponents/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./components/ErrorPageComponent/ErrorPage";
import Questions from "./components/QuestionsPageComponents.jsx/Questions";
import ProfilePage from "./components/UserProfileComponents/ProfilePage";
import PfpAllQuestion from "./components/UserProfileComponents/ProfileLayout/PfpAllQuestion";
import PfpAllAnswer from "./components/UserProfileComponents/ProfileLayout/PfpAllAnswer";
import PfpAllBadges from "./components/UserProfileComponents/ProfileLayout/PfpAllBadges";
import BookMark from "./components/BookMarks/BookMark";
import QuizComponents from "./components/QuizComponents/QuizComponents";
import TextMessage from "./components/TextMessage/TextMessage";
import UserInbox from "./components/TextMessage/UserInbox";
import Dashboard from "./components/Dashboard/Dashboard";
import AskQuestion from "./components/AskQuestionComponents/AskQuestion";
import AddBlog from "./components/AddBlogComponents/AddBlog";
import Admin_Panel from "./components/Dashboard/Admin_Panel/Admin_Panel";
import About from "./components/AboutComponents/About";
import ContactUs from "./components/ContactUsComponents/ContactUs";
import SignIn from "./components/AuthenticationComponents/SignIn";
import SignUp from "./components/AuthenticationComponents/SignUp";
import ForgotPassword from "./components/AuthenticationComponents/ForgotPassword";
import AuthProvider from "./Provider/AuthProvider";
import { normalAxios } from './Hooks/useNormalAxios';
import Question from './components/QuestionComponent.jsx/Question';
import AdminRoute from './components/AuthenticationComponents/AdminRoute';
import Blogs from './components/BlogsPageComponents/blogs';
import Blog from './components/BlogPageComponents/Blog';
import ChangePassword from './components/AuthenticationComponents/ChangePassword';
import PrivateRoute from "./components/AuthenticationComponents/PrivateRoute"
import CreateQuizPage from "./components/QuizComponents/InputQiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      // ask question
      {
        path: "/ask-question",
        element: <AskQuestion />,
      },
      // questions
      {
        path: "/questions",
        element: <Questions />,
      },
      {
        path: "/question/:_id",
        loader: async ({ params }) => {
          const res = await normalAxios.get(
            `/questions/question/${params._id}`
          );
          return res.data;
        },
        element: <Question />,
      },
      // about
      {
        path: "/about",
        element: <About />,
      },
      // contact Us
      {
        path: "/contact",
        element: <ContactUs />,
      },
      // profile
      {
        path: "/profile/:email",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
        children: [
          {
            index: true, // This ensures PfpAllQuestion is shown by default
            element: <PfpAllQuestion />,
          },
          {
            path: "questions",
            element: <PfpAllQuestion />,
          },
          {
            path: "answers",
            element: <PfpAllAnswer />,
          },
          {
            path: "badges",
            element: <PfpAllBadges />,
          },
        ],
      },
      // bookmark
      {
        path: "/bookMark",
        element: <BookMark></BookMark>,
      },
      // quiz
      {
        path: "/quiz",
        element: (
          <PrivateRoute>
            <CreateQuizPage/>
          </PrivateRoute>
        ),
      },
        {
          path: "/quiz/questions",
          element:(
            <QuizComponents />
          )
        },
      // add Blog
      {
        path: "/add-blog",
        element: (
          <AdminRoute>
            <AddBlog />
          </AdminRoute> 
        )
      },
      // blogs
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:_id",
        loader: async ({ params }) => {
          const res = await normalAxios.get(`/blogs/blog/${params._id}`);
          return res.data;
        },
        element: <Blog />,
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
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/change-password",
        element: (
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        ),
      },
    ],
  },

  // chat
  {
    path: "/message",
    element: <TextMessage />,
    children: [
      {
        path: "/message/:user",
        element: <UserInbox />,
      },
    ],
  },
  // dashboard
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'/dashboard',
        element:(
          <AdminRoute>
            <Admin_Panel/>
          </AdminRoute>
        )
      }
    ]

  }
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <ToastContainer position="top-center" />
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
  // </StrictMode>
);
