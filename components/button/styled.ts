import styled from "styled-components";
import { Button } from "antd";
import { ReceivedProps } from "./hook";

const ButtonWrapper = styled(Button)`
  background: ${(props: ReceivedProps) =>
    props.variant === "warning" ? "white" : "white"};
  color: ${(props: ReceivedProps) =>
    props.variant === "warning" ? "#FED049" : "black"};
  border: 3px solid
    ${(props: ReceivedProps) =>
      props.variant === "warning" ? "#FED049" : "black"};
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  min-width: 100px;
  border-radius: 3px;
  margin: 5px;
`;

export default ButtonWrapper;
