import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosCf } from "../../../config/libraries/CfAxios";
import { setAuthen, setUser } from "./authenSlice";

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
    (async () => {
      try {
        const {
          data: { accsetToken, data },
        } = await axiosCf.post("user/login", {
          email: values.username,
          password: values.password,
        });
        addAuthen(accsetToken);
        dispatch(
          setUser({
            avatar: data.avatar,
            email: data.email,
            name: data.name,
          })
        );
      } catch (error) {}
    })();
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
