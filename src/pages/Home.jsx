import { useAuth } from 'components/hooks';

const Home = () => {
  const { user, isLoggedIn } = useAuth();
  return (
    <>
      <h1>
        Greeting {isLoggedIn ? user.name : 'stranger'}! Come in, come in! We are
        the very{' '}
        {isLoggedIn ? 'happy to see you again' : 'waiting for your log-in'}!
      </h1>
    </>
  );
};

export default Home;
