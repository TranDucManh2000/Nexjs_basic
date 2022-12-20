import React, { FC } from "react";
import useTextInput, { Props, ReceivedProps } from "./hook";
import { InputGrop, InputWrapper } from "./styled";

const TextInputLayout: FC<Props> = ({ ...props }) => {
  return (
    <React.Fragment>
      <InputGrop>
        {props.variant === "password" ? (
          <InputWrapper.Password className="inputStyled" {...props} />
        ) : (
          <InputWrapper {...props} />
        )}
      </InputGrop>
    </React.Fragment>
  );
};

const TextInput: FC<ReceivedProps> = (props) => (
  <TextInputLayout {...useTextInput(props)} />
);

export default TextInput;
