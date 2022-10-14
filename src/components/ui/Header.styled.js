import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid aquamarine;
  border-radius: 10px;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(5px);
`;

export default Header;
