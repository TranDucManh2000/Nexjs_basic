import { useState } from "react";
export type ReceivedProps = Record<string, any>;

const usePopover = (props?: ReceivedProps) => {
  const [active, setActive] = useState(false);
  return {
    ...props,
    active,
    setActive,
  };
};

export type Props = ReturnType<typeof usePopover>;

export default usePopover;
