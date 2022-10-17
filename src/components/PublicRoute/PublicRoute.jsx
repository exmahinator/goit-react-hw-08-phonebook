import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PublicRoute = ({ children, redirect = '/', restricted = false }) => {
  const isLogin = useSelector(selectIsLoggedIn);

  const isNavigated = isLogin && restricted;

  return isNavigated ? <Navigate to={redirect} /> : children;
};

export default PublicRoute;
