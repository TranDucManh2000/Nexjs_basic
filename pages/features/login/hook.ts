import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosCf } from "../../../config/libraries/CfAxios";
import { setUser } from "./authenSlice";

export type ReceivedProps = Record<string, any>;

const useLogin = (props: ReceivedProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState(true);
  const dispatch = useDispatch();

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addAuthen = (authent: any) => {
    localStorage.setItem("user", JSON.stringify(authent));
    dispatch(setUser(authent));
    setModal();
  };

  const onFinish = (values: any) => {
    (async () => {
      try {
        const { data } = await axiosCf.post("authentication", {
          email: values.username,
          password: values.password,
          strategy: "local",
        });
        addAuthen({ ...{ accessToken: data.accessToken }, ...data.user });
      } catch (error) {}
    })();
  };

  const onRegister = (values: any) => {
    axiosCf
      .post("users", {
        email: values.email,
        password: values.password,
        name: values.name,
      })
      .then(function (response) {
        // console.log(response);
      });
    setModal();
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
