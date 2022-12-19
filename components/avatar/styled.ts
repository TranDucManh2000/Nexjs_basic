import styled from "styled-components";
import theme from "../../theme";
import { ReceivedProps } from "./hook";

const AvatarWrapper = styled.div`
  background: ${(props: ReceivedProps) =>
    props.variant === "default" ? "" : ""};
  .meta {
    display: flex;
    align-items: center;
    .ant-card-meta-title {
      font-weight: bold;
      .timeLine {
        font-weight: 200;
        color: ${theme.Colors.boder};
        margin-left: 15px;
      }
    }
    .ant-card-meta-description {
      color: ${theme.Colors.boder};
    }
    .ant-card-meta-avatar {
      margin-right: 10px;
      .avatar {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export default AvatarWrapper;
