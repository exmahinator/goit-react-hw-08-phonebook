import styled from 'styled-components';

const PageAuthButton = styled.button`
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 24px;
  border-radius: 10px;
  background-color: aquamarine;
  cursor: pointer;

  :hover,
  :focus {
    background-color: royalblue;
    color: red;
  }
`;

export default PageAuthButton;
