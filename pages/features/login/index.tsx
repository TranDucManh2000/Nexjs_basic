import { Button, Checkbox, Form, Input, Modal } from "antd";
import { FC } from "react";
import ButtonCf from "../../../components/button";
import useLogin, { ReceivedProps } from "./hook";
import LoginWrapper from "./styled";

const LoginLayout: FC<ReceivedProps> = ({
  isModalOpen,
  showModal,
  handleOk,
  handleCancel,
  onFinish,
  onFinishFailed,
}) => {
  return (
    <LoginWrapper>
      <ButtonCf variant="warning" onClick={showModal}>
        Register/Login
      </ButtonCf>
      <Modal
        title="Login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <h1>aaaa</h1>
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
            <Input placeholder="Email Address or Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="password" />
          </Form.Item>

          <Form.Item>
            <ButtonCf
              style={{ width: "100%", marginLeft: "-5px" }}
              variant="warning"
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
