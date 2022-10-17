import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PrivateRoute = ({ children, redirect = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  return isLogin ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  redirect: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
