import { useDispatch } from 'react-redux';
import { register } from 'components/redux/auth/authOperations';
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

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <AuthContainer>
      <AuthTitle>
        Needs some contracts to be hired? <br /> Heroes indeed required!
      </AuthTitle>
      <AuthForm onSubmit={handleSubmit}>
        <AuthSubContainer>
          <AuthLabel htmlFor="name">Choose heroic name:</AuthLabel>
          <AuthInput
            id="name"
            type="text"
            name="name"
            placeholder="What's your name?"
          />
        </AuthSubContainer>
        <AuthSubContainer>
          <AuthLabel htmlFor="email">Your magic mailbox:</AuthLabel>
          <AuthInput
            id="email"
            type="email"
            name="email"
            placeholder="What email do you have?"
          />
        </AuthSubContainer>
        <AuthSubContainer>
          <AuthLabel htmlFor="password">Your secret code:</AuthLabel>
          <AuthInput
            id="password"
            type="password"
            name="password"
            placeholder="Imagine your perfect secret code..."
          />
        </AuthSubContainer>
        <AuthButton type="submit">Sign a contract!</AuthButton>
      </AuthForm>
      <AuthBackground />
    </AuthContainer>
  );
};

export default RegisterForm;
