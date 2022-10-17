import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageLink = styled(Link)`
  display: inline-flex;
  font-weight: bold;
  font-size: inherit;
  color: inherit;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-radius: 15px;

  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    outline: 3px dotted rgba(205, 231, 176);
  }
`;

export default HomePageLink;
