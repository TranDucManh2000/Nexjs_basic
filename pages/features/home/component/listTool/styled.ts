import styled from "styled-components";
import theme from "../../../../../theme";

const ToolWrapper = styled.div`
  margin-top: ${theme.Distance.header};
  width: 90%;
  margin-left: 5%;
  color: ${theme.Colors.while};
  text-align: center;
  font-family: ${theme.FontFamily.Proxima};
  min-height: 530px;
  h1 {
    font-weight: bold;
  }
  .gropTool {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > div {
      padding: 20px;
      width: 24%;
      margin-top: 30px;
      border-radius: 10px;
      height: 152px;
      border: 2px solid ${theme.Colors.boder};
      transition: height 1s;
      overflow: hidden;
      :hover {
        height: 260px;
        cursor: pointer;
      }
    }
  }
`;

export default ToolWrapper;
