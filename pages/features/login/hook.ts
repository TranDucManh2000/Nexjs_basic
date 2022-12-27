import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosCf } from "../../../config/libraries/CfAxios";
import { setAuthen } from "./authenSlice";

export type ReceivedProps = Record<string, any>;

const useLogin = (props: ReceivedProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState(true);
  const dispatch = useDispatch();

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addAuthen = (authent: string) => {
    localStorage.setItem("authent", authent);
    dispatch(setAuthen(authent));
    setModal();
  };

  const onFinish = (values: any) => {
    axiosCf
      .post("user/login", {
        email: values.username,
        password: values.password,
      })
      .then(function (response) {
        response.data.status === 200
          ? addAuthen(response.data.accsetToken)
          : null;
      });
  };

  const onRegister = (values: any) => {
    axiosCf
      .post("/user/register", {
        email: values.email,
        password: values.password,
        name: values.name,
      })
      .then(function (response) {
        response.data.status === 200 ? setModal() : null;
      });
  };

  return {
    ...props,
    isModalOpen,
    setModal,
    onFinish,
    onFinishFailed,
    typeModal,
    setTypeModal,
    onRegister,
  };
};

export type Props = ReturnType<typeof useLogin>;

export default useLogin;
