import styled from 'styled-components';
import Inn from '../../images/InnOpt03.jpg';

const ContactsBackgroundContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, cyan, lightgreen);
  background-image: url(${Inn});
  background-size: cover;
  opacity: 0.9;
  border-radius: 20px;
`;

export default ContactsBackgroundContainer;
