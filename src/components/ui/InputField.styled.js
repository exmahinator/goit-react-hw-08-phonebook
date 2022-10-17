import styled from 'styled-components';

const InputField = styled.input`
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  padding: 5px;
  &:active,
  &:focus {
    outline: 3px solid rgba(0, 255, 0, 0.5);
  }
`;

export default InputField;
