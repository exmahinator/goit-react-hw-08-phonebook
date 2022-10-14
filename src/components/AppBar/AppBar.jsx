import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { useAuth } from '../hooks';
import { Header, Container, HeaderContainer } from 'components/ui';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <HeaderContainer>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderContainer>
      </Container>
    </Header>
  );
};
