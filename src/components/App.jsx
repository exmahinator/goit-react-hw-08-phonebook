import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import '../config';
import { Layout } from './Layout';
import { useAuth } from './hooks';
import { refreshUser } from './redux/auth/authOperations';
// import { lazy } from 'react';

import { HomePage, RegisterPage, LoginPage, ContactsPage } from 'pages';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

// const HomePage = lazy(() => import('../pages'));
// const RegisterPage = lazy(() => import('../pages'));
// const LoginPage = lazy(() => import('../pages'));
// const ContactsPage = lazy(() => import('../pages'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<HomePage />} />
  //       {/* <Route
  //         path="/register"
  //         element={
  //           <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
  //         }
  //       />
  //       <Route
  //         path="/login"
  //         element={
  //           <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
  //         }
  //       />
  //       <Route
  //         path="/tasks"
  //         element={
  //           <PrivateRoute redirectTo="/login" component={<TasksPage />} />
  //         }
  //       /> */}
  //     </Route>
  //   </Routes>
  // );
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        {/* <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
