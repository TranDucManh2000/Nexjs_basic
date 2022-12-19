import { useState } from "react";
export type ReceivedProps = Record<string, any>;

const useProfile = (props: ReceivedProps) => {
  const [keyTab, setKeyTab] = useState<number>(0);
  const onChange = (key: number) => {
    setKeyTab(key);
  };
  return {
    ...props,
    keyTab,
    onChange,
  };
};

export type Props = ReturnType<typeof useProfile>;

export default useProfile;
