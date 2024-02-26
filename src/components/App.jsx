import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RegisterPage />
              // <RestrictedRoute
              //   redirectTo="/tasks"
              //   component={<RegisterPage />}
              // />
            }
          />
          {/* <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            }
          /> */}
          <Route
            path="/contacts"
            element={
              <ContactsPage />
              // <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>

      {/* {isLoading && !error && <Loader />} */}
      <GlobalStyle />
    </>
  );
};
