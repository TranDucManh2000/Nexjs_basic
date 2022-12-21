import { Form } from "antd";
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
  typeModal,
  setTypeModal,
}) => {
  return (
    <LoginWrapper>
      <ButtonCf variant="warning" onClick={setModal}>
        Register/Login
      </ButtonCf>
      <Modal
        closeModal={setModal}
        headerTitle={typeModal ? "Login" : "Register"}
        header={true}
        isShowing={isModalOpen}
      >
        {typeModal ? (
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1>Welcome!</h1>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <TextInput placeholder="Email Address or Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
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
            <Form.Item>
              <p className="footer">
                Don’t have an account?
                <span onClick={() => setTypeModal(!typeModal)}>
                  Create Account
                </span>
              </p>
            </Form.Item>
          </Form>
        ) : (
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1>Welcome! </h1>
            <p>Register for free to Buy, Sell & Create NFTs</p>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <TextInput placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="Email"
              rules={[
                { required: true, message: "Please input your Email Address!" },
              ]}
            >
              <TextInput placeholder="Email Address " />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <TextInput variant="password" placeholder="password" />
            </Form.Item>
            <Form.Item
              name="confirm"
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
              ]}
            >
              <TextInput variant="password" placeholder="confirm password" />
            </Form.Item>
            <Form.Item>
              <ButtonCf
                style={{ width: "100%", marginLeft: "-5px" }}
                variant="warning"
                onClick={() => setModal()}
              >
                Register
              </ButtonCf>
            </Form.Item>
            <Form.Item>
              <p className="footer">
                Already have an account?
                <span onClick={() => setTypeModal(!typeModal)}>Login</span>
              </p>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </LoginWrapper>
  );
};

const LoginNft: FC<ReceivedProps> = (props) => (
  <LoginLayout {...useLogin(props)} />
);

export default LoginNft;
