import { NavigationLink, PageAuth } from 'components/ui';

const AuthNav = () => {
  return (
    <PageAuth>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </PageAuth>
  );
};

export default AuthNav;
