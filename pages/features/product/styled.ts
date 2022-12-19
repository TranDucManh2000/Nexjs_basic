import styled from "styled-components";
import theme from "../../../theme";

const ProductWrapper = styled.div`
  margin-top: ${theme.Distance.header};
  color: ${theme.Colors.while};
  width: 100%;
  font-family: ${theme.FontFamily.Proxima};
  .container {
    margin-top: 100px;
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    .input {
      background-color: ${theme.Colors.black};
      color: ${theme.Colors.while};
      border-radius: 30px;
      ::placeholder {
        color: ${theme.Colors.boder};
      }
    }
    h2 {
      font-weight: bold;
    }
    > div {
      width: 48%;
      hr {
        color: ${theme.Colors.boder};
      }
      p {
        color: ${theme.Colors.boder};
      }
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span {
          color: ${theme.Colors.boder};
          > span {
            font-weight: bold;
            color: ${theme.Colors.while};
          }
        }
        > h2 {
          .coins {
            color: ${theme.Colors.warning};
          }
          .dola {
            color: ${theme.Colors.boder};
            font-size: 16px;
          }
        }
      }
      .comment {
        max-width: 500px;
        color: ${theme.Colors.while};
        margin-left: 60px;
      }
    }
  }
`;

export { ProductWrapper };
