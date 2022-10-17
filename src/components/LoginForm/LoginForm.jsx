import { useDispatch } from 'react-redux';
import { logIn } from 'components/redux/auth/authOperations';
import {
  AuthContainer,
  AuthForm,
  AuthSubContainer,
  AuthTitle,
  AuthButton,
  AuthLabel,
  AuthInput,
  AuthBackground,
} from 'components/ui';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <AuthContainer>
      <AuthTitle>
        Here's some beer for you to cheer!
        <br />
        Remind your name and we'll begin!
      </AuthTitle>
      <AuthForm onSubmit={handleSubmit}>
        <AuthSubContainer>
          <AuthLabel htmlFor="email">Email:</AuthLabel>
          <AuthInput
            id="email"
            type="email"
            name="email"
            placeholder="your@mail"
          />
        </AuthSubContainer>
        <AuthSubContainer>
          <AuthLabel htmlFor="password">Password:</AuthLabel>
          <AuthInput
            id="password"
            type="password"
            name="password"
            placeholder="your password"
          />
        </AuthSubContainer>
        <AuthButton type="submit">Take a gulp!</AuthButton>
      </AuthForm>
      <AuthBackground />
    </AuthContainer>
  );
};

export default LoginForm;
