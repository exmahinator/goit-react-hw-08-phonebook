import styled from 'styled-components';

const Container = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  padding-top: ${props => (props.afar ? '30px' : '15px')};

  &:first-child {
    border: 2px solid rgb(0, 255, 0, 0.5);
    border-radius: 10px;
  }
`;

export default Container;
