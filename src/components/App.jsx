import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import '../config';
import { Layout } from './Layout';
import { useAuth } from './hooks';
import { refreshUser } from './redux/auth/authOperations';
import { lazy } from 'react';
import { Container, Section } from './ui';
import PrivateRoute from './PrivatRoute/PrivatRoute';
import PublicRoute from './PublicRoute/PublicRoute';
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    token && dispatch(refreshUser());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return isRefreshing ? (
    <Section>
      <Container>
        <p>Refreshing user...</p>
      </Container>
    </Section>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted redirect="/">
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted redirect="/">
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirect="/register">
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
