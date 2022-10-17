import styled from 'styled-components';

const ContactButton = styled.button`
  font-size: inherit;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.85);
  font-size: ${props => (props.delete ? '16px' : '32px')};

  opacity: 0.75;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props =>
      props.delete ? 'rgba(255, 0, 0, 0.5)' : 'rgba(205, 231, 176, 0.9)'};
    opacity: 1;
  }
`;

export default ContactButton;
