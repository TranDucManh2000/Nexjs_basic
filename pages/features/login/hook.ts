import { useState } from "react";

export type ReceivedProps = Record<string, any>;

const useLogin = (props: ReceivedProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
    showModal,
    handleOk,
    handleCancel,
    onFinish,
    onFinishFailed,
  };
};

export type Props = ReturnType<typeof useLogin>;

export default useLogin;
