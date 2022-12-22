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
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    .text {
      margin-left: 50px;
      font-size: ${theme.FontSize.text125};
      color: ${theme.Colors.while};
      :hover {
        cursor: pointer;
        color: ${theme.Colors.warning};
      }
    }
  }
  .gropBell {
    width: 450px;
    color: ${theme.Colors.while};
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-weight: bold;
        color: ${theme.Colors.warning};
      }
    }
    .body {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      margin-bottom: 30px;
      flex-wrap: wrap;
      .icon {
        font-size: 70px;
        width: 100%;
        color: ${theme.Colors.warning};
        margin: 10px;
      }
      h2 {
        width: 100%;
        text-align: center;
      }
      span {
        color: ${theme.Colors.boder};
      }
    }
  }
  .bell {
    width: 43px;
    height: 43px;
    border-radius: 40px;
    background-color: ${theme.Colors.boder};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    .icon {
      font-size: 17px;
      color: ${theme.Colors.while};
    }
  }
  .avatar {
    color: ${theme.Colors.while};
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    cursor: pointer;
    .btn {
      margin-top: 20px;
      width: 100%;
    }
    > div {
      margin-top: 10px;
      font-weight: bold;
      .outIcon {
        color: ${theme.Colors.warning};
      }
    }
  }
  @media screen and (max-width: 1600px) {
    /* background-color: #fff; */
  }
`;

export default HeaderWrapper;
