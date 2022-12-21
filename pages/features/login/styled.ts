import styled from "styled-components";
import theme from "../../../theme";

const LoginWrapper = styled.div`
  h1 {
    color: ${theme.Colors.while};
    font-weight: bold;
  }
  p {
    color: ${theme.Colors.boder};
  }
  .footer {
    font-family: ${theme.FontFamily.Proxima};
    text-align: center;
    color: ${theme.Colors.boder};
    align-items: center;
    margin: 0;
    > span {
      margin: 5px;
      font-weight: bold;
      color: ${theme.Colors.warning};
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

export default LoginWrapper;
