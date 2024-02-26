import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';
import { useAuth } from '../hooks';
import { refreshUser } from '../redux/auth/operations';
import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
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
          <Route
            path="/login"
            element={
              <LoginPage />
              // <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <ContactsPage />
              // <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* {isLoading && !error && <Loader />} */}
      <GlobalStyle />
    </>
  );
};
