import styled from "styled-components";
import theme from "../../../../../theme";

const SliderWrapper = styled.div`
  height: 520px;
  width: 100%;
  .background {
    height: 520px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${theme.Colors.while};
    font-family: ${theme.FontFamily.Proxima};
    padding: 5%;
    > div {
      max-width: 500px;
      > h1 {
        font-size: 45px;
        font-weight: bold;
      }
      > h2 {
        font-size: 32px;
        font-weight: bold;
      }
      > p {
        font-size: 20px;
      }
    }
  }
`;

export default SliderWrapper;
