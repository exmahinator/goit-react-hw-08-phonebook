import { useDispatch } from 'react-redux';
import { logOut } from 'components/redux/auth/authOperations';
import { useAuth } from '../hooks';
import { PageAuthButton, UserName } from 'components/ui';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <UserName>Welcome, {user.name}</UserName>
      <PageAuthButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </PageAuthButton>
    </>
  );
};

export default UserMenu;
