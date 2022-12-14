import styled from "styled-components";
import { Button } from "antd";
import { ReceivedProps } from "./hook";
import theme from "../../theme";

const ButtonWrapper = styled(Button)`
  background: ${(props: ReceivedProps) =>
    props.variant === "warning"
      ? `${theme.Colors.warning}`
      : `${theme.Colors.black}`};
  color: ${(props: ReceivedProps) =>
    props.variant === "warning"
      ? `${theme.Colors.black}`
      : `${theme.Colors.while}`};
  border: 1px solid
    ${(props: ReceivedProps) =>
      props.variant === "warning"
        ? `${theme.Colors.warning}`
        : `${theme.Colors.while}`};
  min-height: 38px;
  font-size: 12px;
  font-weight: bold;
  min-width: 130px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.FontFamily.Proxima};
  border-radius: 38px;
  :hover {
    border: 1px solid
      ${(props: ReceivedProps) =>
        props.variant === "warning"
          ? `${theme.Colors.warning} !important`
          : `${theme.Colors.while} !important`};
    color: ${(props: ReceivedProps) =>
      props.variant === "warning"
        ? `${theme.Colors.black} !important`
        : `${theme.Colors.while} !important`};
  }
`;

export default ButtonWrapper;
