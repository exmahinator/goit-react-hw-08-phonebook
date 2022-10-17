import styled from 'styled-components';

const PageAuthButton = styled.button`
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 24px;
  border-radius: 10px;
  cursor: pointer;
  border: transparent;
  color: rgb(112, 50, 118);

  background: linear-gradient(
    90deg,
    rgba(250, 214, 42, 1) 0%,
    rgba(251, 178, 51, 1) 33%,
    rgba(251, 177, 50, 1) 66%,
    rgba(251, 176, 50, 1) 99%
  );

  opacity: 0.75;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-radius 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border-radius: 25px;
    outline: 3px groove orange;
    opacity: 1;
    color: #ff6961;
  }
`;

export default PageAuthButton;
