import styled from 'styled-components';
import Inn from '../../images/InnOpt03.jpg';

const ContactsBackgroundContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(250, 214, 42, 1) 0%,
    rgba(251, 178, 51, 1) 33%,
    rgba(251, 177, 50, 1) 66%,
    rgba(251, 176, 50, 1) 99%
  );
  background-image: url(${Inn});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.9;
  border-radius: 20px;
`;

export default ContactsBackgroundContainer;
