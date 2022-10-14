import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ActivePageLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: aquamarine;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 24px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  :hover,
  :focus {
    background-color: royalblue;
    color: red;
  }

  /* &.active {
    color: red;
    background-color: royalblue;
  } */
`;

export default ActivePageLink;
