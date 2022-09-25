import styled from 'styled-components';

const InputField = styled.input`
  margin-top: 10px;
  &:active,
  &:focus {
    outline: 3px solid rgba(0, 255, 0, 0.5);
  }
`;

export default InputField;
