import styled from 'styled-components';

const AuthInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  font-size: 30px;
  background-color: rgba(255, 255, 255, 0.75);
  color: rgb(112, 50, 118);
  outline-color: rgb(205, 231, 176);
  &::placeholder {
    font-size: 22px;
    opacity: 0.4;
    text-align: center;
  }
`;

export default AuthInput;
