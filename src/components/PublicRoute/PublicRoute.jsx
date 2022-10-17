import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import PropTypes from 'prop-types';

const PublicRoute = ({ children, redirect = '/', restricted = false }) => {
  // console.log(redirect);
  // console.log(restricted);
  const isLogin = useSelector(selectIsLoggedIn);

  const isNavigated = isLogin && restricted;

  return isNavigated ? <Navigate to={redirect} /> : children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  // Чомусь не відпрацьовує ПропТайпс. На обидва поля пише "undefined"...
  // redirect: PropTypes.string.isRequired,
  // restricted: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};
