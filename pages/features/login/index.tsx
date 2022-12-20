import { Form, Input } from "antd";
import { FC } from "react";
import ButtonCf from "../../../components/button";
import Modal from "../../../components/Modal";
import TextInput from "../../../components/textInput";
import useLogin, { ReceivedProps } from "./hook";
import LoginWrapper from "./styled";

const LoginLayout: FC<ReceivedProps> = ({
  isModalOpen,
  setModal,
  onFinish,
  onFinishFailed,
}) => {
  return (
    <LoginWrapper>
      <ButtonCf variant="warning" onClick={setModal}>
        Register/Login
      </ButtonCf>
      <Modal
        closeModal={setModal}
        headerTitle="Login"
        header={true}
        isShowing={isModalOpen}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <TextInput placeholder="Email Address or Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <TextInput variant="password" placeholder="password" />
          </Form.Item>

          <Form.Item>
            <ButtonCf
              style={{ width: "100%", marginLeft: "-5px" }}
              variant="warning"
              onClick={() => setModal()}
            >
              Login
            </ButtonCf>
          </Form.Item>
        </Form>
      </Modal>
    </LoginWrapper>
  );
};

const LoginNft: FC<ReceivedProps> = (props) => (
  <LoginLayout {...useLogin(props)} />
);

export default LoginNft;
