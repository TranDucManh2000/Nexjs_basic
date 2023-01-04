import { AvatarProps } from "antd";
export type ReceivedProps = AvatarProps & {
  variant?: "default" | "onlyName";
  title?: string;
  description?: string;
  timeLine?: string;
  dataLink?: string;
  dataImg?: string;
};

const useAvatar = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useAvatar>;

export default useAvatar;
