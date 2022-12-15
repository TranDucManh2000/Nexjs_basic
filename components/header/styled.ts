import styled from "styled-components";
import theme from "../../theme";

const HeaderWrapper = styled.div`
  z-index: 20;
  background-color: ${theme.Colors.black};
  height: 103px;
  border-bottom: 1px solid ${theme.Colors.boder};
  font-family: ${theme.FontFamily.Proxima};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  > div {
    display: flex;
    align-items: center;
    .text {
      margin-left: 50px;
      font-size: ${theme.FontSize.text125};
      color: ${theme.Colors.while};
    }
  }
  @media screen and (max-width: 1600px) {
    /* background-color: #fff; */
  }
`;

export default HeaderWrapper;
