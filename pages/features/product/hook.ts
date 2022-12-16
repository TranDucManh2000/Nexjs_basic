import { MenuProps } from "antd";

export type ReceivedProps = Record<string, any>;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "No Item",
  },
];

const useProduct = (props: ReceivedProps) => {
  return {
    ...props,
    items,
  };
};

export type Props = ReturnType<typeof useProduct>;

export default useProduct;
