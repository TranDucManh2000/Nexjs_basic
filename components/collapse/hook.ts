import { CollapsePanelProps } from "antd";

export type ReceivedProps = CollapsePanelProps & {
  variant?: "propeties" | "history";
};

const useCollapse = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useCollapse>;

export default useCollapse;
