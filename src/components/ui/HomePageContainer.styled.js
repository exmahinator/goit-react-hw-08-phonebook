import styled from 'styled-components';
import Inn from '../../images/InnOpt.jpg';

const HomePageContainer = styled.div`
  width: 100%;
  height: 80vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: 'Courgette', cursive;
  font-size: 36px;
  color: rgb(205, 231, 176);
  background-image: linear-gradient(to right, cyan, lightgreen);
  background-image: url(${Inn});
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 3px 10px 13px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 3px 10px 13px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 3px 10px 13px 0px rgba(0, 0, 0, 0.5);
  border-bottom: 4px solid transparent;
  text-shadow: 2px 2px 3px rgb(112, 50, 118);
`;

export default HomePageContainer;
