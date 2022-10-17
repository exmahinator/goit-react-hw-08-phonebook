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
  border-radius: 10px;
  &:hover,
  &:focus {
    outline: 3px solid rgba(205, 231, 176, 0.5);
    outline-style: dotted;
  }
`;

export default HomePageLink;
