import React, { FC } from "react";
import ButtonWrapper from "./styled";
import useButton, { ReceivedProps } from "./hook";

const ButtonLayout: FC<ReceivedProps> = ({ ...props }) => {
  return (
    <ButtonWrapper {...props} variant={props.variant}>
      {props.children}
    </ButtonWrapper>
  );
};

const ButtonCf: FC<ReceivedProps> = (props) => (
  <ButtonLayout {...useButton(props)} />
);

export default ButtonCf;
