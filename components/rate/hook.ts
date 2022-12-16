import { useState } from "react";

export type ReceivedProps = Record<string, any>;

const useRate = (props: ReceivedProps) => {
  const [value, setValue] = useState(5);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  return {
    ...props,
    desc,
    value,
    setValue,
  };
};

export type Props = ReturnType<typeof useRate>;

export default useRate;
