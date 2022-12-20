import { InputProps } from "antd";

export type ReceivedProps = InputProps & {
  variant?: "default" | "password";
};
const useTextInput = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useTextInput>;

export default useTextInput;
