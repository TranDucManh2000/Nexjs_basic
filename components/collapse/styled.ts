import styled from "styled-components";
import theme from "../../theme";
import { ReceivedProps } from "./hook";

const CollapseWrapper = styled.div`
  margin-top: 10px;
  .collapse {
    width: 100%;
    background-color: ${theme.Colors.black};
    border-color: ${theme.Colors.boder};
    border: 1px solid ${theme.Colors.boder};
    .ant-collapse-content {
      background-color: ${theme.Colors.black};
    }
    .ant-collapse-header-text {
      color: ${theme.Colors.boder};
      font-weight: bold;
    }
    p {
      text-align: center;
    }
  }
`;

export default CollapseWrapper;
