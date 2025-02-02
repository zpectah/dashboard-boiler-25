import { lazy } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import config from '../config';
import { AppLayout } from '../components';

import Error from '../modules/Error/Error';

const Welcome = lazy(() => import('../modules/Welcome/Welcome'));
const Registration = lazy(() => import('../modules/Registration/Registration'));
const PasswordRecovery = lazy(() => import('../modules/PasswordRecovery/PasswordRecovery'));
const Login = lazy(() => import('../modules/Login/Login'));
const Dashboard = lazy(() => import('../modules/Dashboard/Dashboard'));
const Articles = lazy(() => import('../modules/Articles/Articles'));
const Payments = lazy(() => import('../modules/Payments/Payments'));
const Users = lazy(() => import('../modules/Users/Users'));

const AppRouter = () => {
  const routes = config.routes.routes;
  const router = createBrowserRouter([
    {
      path: routes.error.path,
      element: <Error code={404} />,
    },
    {
      path: config.routes.root,
      element: <Navigate replace to={routes.welcome.path} />,
    },

    // Outer views - without authorization
    {
      path: routes.welcome.path,
      element: <Welcome />,
    },
    {
      path: routes.login.path,
      element: <Login />,
    },
    {
      path: routes.registration.path,
      element: <Registration />,
    },
    {
      path: routes.password_recovery.path,
      element: <PasswordRecovery />,
    },

    // Routes with authorization
    {
      element: <AppLayout />,
      children: [
        {
          path: routes.dashboard.path,
          element: <Dashboard />,
        },

        // Articles
        {
          path: routes.articles.path,
          element: <Articles />,
          children: [
            {
              path: `${routes.articles.path}/:id`,
              element: <Articles />,
            },
          ],
        },

        // Payments
        {
          path: routes.payments.path,
          element: <Payments />,
          children: [
            {
              path: `${routes.payments.path}/:id`,
              element: <Payments />,
            },
          ],
        },

        // Users
        {
          path: routes.users.path,
          element: <Users />,
          children: [
            {
              path: `${routes.users.path}/:id`,
              element: <Users />,
            },
          ],
        },

        // ...
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
