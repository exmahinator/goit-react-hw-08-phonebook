import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 4px solid transparent;
  border-radius: 20px;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(5px);
  background: rgb(227, 161, 72);
  background: linear-gradient(
    0deg,
    rgba(227, 161, 72, 1) 0%,
    rgba(201, 128, 50, 1) 33%,
    rgba(182, 106, 67, 1) 66%,
    rgba(158, 83, 51, 1) 100%
  );
  box-shadow: 3px 10px 13px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 3px 10px 13px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 3px 10px 13px 0px rgba(0, 0, 0, 0.5);
  font-family: 'Courgette', cursive;
  font-size: 36px;
  color: rgb(205, 231, 176);

  /* CSS HEX */
  /* --indian-yellow: #e3a148ff;
  --bronze: #c98032ff;
  --brown-sugar: #b66a43ff;
  --chestnut: #9e5333ff; */

  /* CSS HSL */
  /* --indian-yellow: hsla(34, 73%, 59%, 1);
  --bronze: hsla(31, 60%, 49%, 1);
  --brown-sugar: hsla(20, 46%, 49%, 1);
  --chestnut: hsla(18, 51%, 41%, 1); */

  /* SCSS HEX */
  /* $indian-yellow: #e3a148ff;
  $bronze: #c98032ff;
  $brown-sugar: #b66a43ff;
  $chestnut: #9e5333ff; */

  /* SCSS HSL */
  /* $indian-yellow: hsla(34, 73%, 59%, 1);
  $bronze: hsla(31, 60%, 49%, 1);
  $brown-sugar: hsla(20, 46%, 49%, 1);
  $chestnut: hsla(18, 51%, 41%, 1); */

  /* SCSS RGB */
  /* $indian-yellow: rgba(227, 161, 72, 1);
  $bronze: rgba(201, 128, 50, 1);
  $brown-sugar: rgba(182, 106, 67, 1);
  $chestnut: rgba(158, 83, 51, 1); */

  /* SCSS Gradient */
  /* $gradient-top: linear-gradient(
    0deg,
    #e3a148ff,
    #c98032ff,
    #b66a43ff,
    #9e5333ff
  );
  $gradient-right: linear-gradient(
    90deg,
    #e3a148ff,
    #c98032ff,
    #b66a43ff,
    #9e5333ff
  );
  $gradient-bottom: linear-gradient(
    180deg,
    #e3a148ff,
    #c98032ff,
    #b66a43ff,
    #9e5333ff
  );
  $gradient-left: linear-gradient(
    270deg,
    #e3a148ff,
    #c98032ff,
    #b66a43ff,
    #9e5333ff
  );
  $gradient-top-right: linear-gradient(
    45deg,
    #e3a148ff,
    #c98032ff,
    #b66a43ff,
    #9e5333ff
  );
  $gradient-bottom-right: linear-gradient(
    135deg,
    #e3a148ff,
    #c98032ff,
    #b66a43ff,
    #9e5333ff
  );
  $gradient-top-left: linear-gradient(
    225deg,
    #e3a148ff,
    #c98032ff,
    #b66a43ff,
    #9e5333ff
  );
  $gradient-bottom-left: linear-gradient(
    315deg,
    #e3a148ff,
    #c98032ff,
    #b66a43ff,
    #9e5333ff
  );
  $gradient-radial: radial-gradient(#e3a148ff, #c98032ff, #b66a43ff, #9e5333ff); */
`;

export default Header;
