import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PrivateRoute = ({ children, redirect = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  return isLogin ? children : <Navigate to={redirect} />;
  // return isLogin ? <Navigate to="/" /> : <Navigate to={redirect} />;
};

export default PrivateRoute;
