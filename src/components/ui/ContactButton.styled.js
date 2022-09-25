import styled from 'styled-components';

const ContactButton = styled.button`
  font-size: inherit;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: transparent;

  opacity: 0.75;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props =>
      props.delete ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 255, 0, 0.5)'};
    opacity: 1;
  }
`;

export default ContactButton;
