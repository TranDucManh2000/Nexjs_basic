import styled from "styled-components";
import theme from "../../theme";

const FooterWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${theme.Colors.boder};
  margin-top: 20px;
`;

const FooterContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-top: 40px;
  font-family: ${theme.FontFamily.Proxima};
  display: flex;
  justify-content: space-between;
  p {
    cursor: pointer;
  }
  > div {
    width: 25%;
    h3 {
      color: ${theme.Colors.while};
      font-weight: bold;
    }
    > p {
      margin-top: 20px;
      margin-bottom: 20px;
      color: ${theme.Colors.boder};
    }
    .icon {
      display: flex;
      color: ${theme.Colors.boder};
      font-size: 25px;
      > span {
        margin-right: 15px;
        cursor: pointer;
      }
    }
  }
  .gropText {
    width: 15%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 5%;
    > p {
      font-weight: bold;
      width: 100%;
      text-align: left;
      :hover {
        color: ${theme.Colors.warning};
      }
    }
  }
`;

const Footerlicense = styled.div`
  width: 90%;
  margin-left: 5%;
  border-top: 1px solid ${theme.Colors.boder};
  margin-top: 30px;
  padding-bottom: 15px;
  > p {
    margin-top: 30px;
    color: ${theme.Colors.boder};
  }
`;

export { FooterWrapper, FooterContainer, Footerlicense };
