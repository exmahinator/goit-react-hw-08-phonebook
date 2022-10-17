import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ActivePageLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 24px;

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

  &:not(:last-child) {
    margin-right: 20px;
  }

  :hover,
  :focus {
    border-radius: 25px;
    outline: 3px groove orange;
    opacity: 1;
    color: #ff6961;
  }
`;

export default ActivePageLink;
