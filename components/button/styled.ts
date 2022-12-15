import styled from "styled-components";
import { Button } from "antd";
import { ReceivedProps } from "./hook";
import theme from "../../theme";

const ButtonWrapper = styled(Button)`
  background: ${(props: ReceivedProps) =>
    props.variant === "warning"
      ? `${theme.Colors.warning}`
      : props.variant === "yellow"
      ? `${theme.Background.gray}`
      : `${theme.Colors.black}`};
  color: ${(props: ReceivedProps) =>
    props.variant === "warning"
      ? `${theme.Colors.black}`
      : props.variant === "yellow"
      ? `${theme.Colors.warning}`
      : `${theme.Colors.while}`};
  border: 1px solid
    ${(props: ReceivedProps) =>
      props.variant === "warning"
        ? `${theme.Colors.warning}`
        : props.variant === "yellow"
        ? `${theme.Colors.warning}`
        : `${theme.Colors.while}`};
  min-height: ${(props: ReceivedProps) =>
    props.hight ? `${props.hight}px` : `38px`};
  font-size: ${(props: ReceivedProps) =>
    props.font ? `${props.font}px` : `12px`};
  font-weight: bold;
  min-width: 130px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.FontFamily.Proxima};
  border-radius: 38px;
  > span {
    margin: 5px;
  }
  :hover {
    border: 1px solid
      ${(props: ReceivedProps) =>
        props.variant === "warning"
          ? `${theme.Colors.warning} !important`
          : props.variant === "yellow"
          ? `${theme.Colors.warning} !important`
          : `${theme.Colors.while} !important`};
    color: ${(props: ReceivedProps) =>
      props.variant === "warning"
        ? `${theme.Colors.black} !important`
        : props.variant === "yellow"
        ? `${theme.Colors.warning} !important`
        : `${theme.Colors.while} !important`};
    background-color: ${(props: ReceivedProps) =>
      props.variant === "warning"
        ? `${theme.Hover.darkYellow}`
        : `${theme.Hover.gray}`};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export default ButtonWrapper;
