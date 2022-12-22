import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
export type ReceivedProps = Record<string, any>;

const arrayProduct = [1, 2, 3, 4, 1];

const useProfile = (props: ReceivedProps) => {
  const authen = useSelector((state: RootState) => state.authenticator.authen);
  const [keyTab, setKeyTab] = useState<number>(0);
  const onChange = (key: number) => {
    setKeyTab(key);
  };
  const [isShowing, setisShowing] = useState(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return {
    ...props,
    keyTab,
    onChange,
    arrayProduct,
    isShowing,
    setisShowing,
    onFinish,
    onFinishFailed,
    authen,
  };
};

export type Props = ReturnType<typeof useProfile>;

export default useProfile;
