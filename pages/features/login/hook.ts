import { useState } from "react";

export type ReceivedProps = Record<string, any>;

const useLogin = (props: ReceivedProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState(true);

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return {
    ...props,
    isModalOpen,
    setModal,
    onFinish,
    onFinishFailed,
    typeModal,
    setTypeModal,
  };
};

export type Props = ReturnType<typeof useLogin>;

export default useLogin;
