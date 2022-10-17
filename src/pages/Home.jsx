import { useDispatch } from 'react-redux';
import { logOut } from 'components/redux/auth/authOperations';
import { useAuth } from 'components/hooks';
import {
  HomePageHeader,
  HomePageContainer,
  HomePageText,
  HomePageAccent,
  HomePageButton,
  HomePageLink,
} from 'components/ui';

const Home = () => {
  const { user, isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <HomePageContainer>
        <HomePageHeader>"Happy Contacts Inn"</HomePageHeader>
        <HomePageText>
          Greeting{' '}
          {isLoggedIn ? (
            <>
              <HomePageAccent>{user.name}</HomePageAccent>
              <span>! Please, </span>
              <HomePageLink to="/contacts">come in</HomePageLink>
              <span> ! Glad to see you here again!</span>
            </>
          ) : (
            <>
              <span>stranger! Please, come in! Take your time to make </span>
              <HomePageLink to="/login">log-in</HomePageLink>
              <span> !</span>
            </>
          )}
        </HomePageText>
        <HomePageText>
          {isLoggedIn ? (
            <>
              <span>Dear friend says that's time to leave? </span>
              <HomePageButton onClick={() => dispatch(logOut())}>
                See you soon!
              </HomePageButton>
              <span> Fulfil your dreams!</span>
            </>
          ) : (
            <>
              <span>If you're here for the first time - check </span>
              <HomePageLink to="/register">register</HomePageLink>
              <span> and you'll fly!</span>
            </>
          )}
        </HomePageText>
      </HomePageContainer>
    </>
  );
};

export default Home;
