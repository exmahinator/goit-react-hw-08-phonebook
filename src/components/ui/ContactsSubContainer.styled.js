import styled from 'styled-components';

const ContactsSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:last-child {
    padding-bottom: 15px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 5%,
      rgba(173, 133, 99, 1) 45%
    );
    border-radius: 50px;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default ContactsSubContainer;
