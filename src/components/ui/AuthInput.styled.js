import styled from 'styled-components';

const AuthInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  &::placeholder {
    font-size: 22px;
    opacity: 0.2;
    text-align: center;
  }
`;

export default AuthInput;
