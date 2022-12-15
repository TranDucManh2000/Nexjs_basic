import { ButtonProps } from "antd";

export type ReceivedProps = ButtonProps & {
  variant?: "default" | "warning" | "yellow";
  hight?: number;
  font?: number;
};

const useButton = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useButton>;

export default useButton;
