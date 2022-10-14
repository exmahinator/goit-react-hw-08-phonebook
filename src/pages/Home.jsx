import { useAuth } from 'components/hooks';
import { Container } from 'components/ui';

const Home = () => {
  const { user, isLoggedIn } = useAuth();
  return (
    <Container>
      <h1>
        Greeting {isLoggedIn ? user.name : 'stranger'}! Come in, come in! We are
        the very{' '}
        {isLoggedIn ? 'happy to see you again' : 'waiting for your log-in'}!
      </h1>
    </Container>
  );
};

export default Home;
