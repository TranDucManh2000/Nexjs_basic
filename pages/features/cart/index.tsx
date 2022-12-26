import { Button, Form, Image, Input } from "antd";
import { FC } from "react";
import ButtonCf from "../../../components/button";
import useCart from "./hook";
import { ReceivedProps } from "./hook";
import CartWrapper from "./styled";

const CartLayout: FC<ReceivedProps> = ({
  users,
  showChat,
  setShowChat,
  onFinish,
}) => {
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <CartWrapper>
      <div className="gropCart">
        <h1>List Cart</h1>
        <div className="cart">
          <Image
            src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg"
            preview={false}
            className="itemImg"
          />
        </div>
      </div>
      {users.map((user: any) => (
        <div style={{ color: "#fff" }}>
          <ButtonCf
            onClick={() =>
              setShowChat({ isShow: !showChat.isShow, user_id: user.id })
            }
            variant="warning"
          >
            {user.id}
          </ButtonCf>
        </div>
      ))}

      {showChat.isShow && (
        <div className="form-chat" style={{ background: "#fff" }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </CartWrapper>
  );
};

const CartNft: FC<ReceivedProps> = (props) => (
  <CartLayout {...useCart(props)} />
);

export default CartNft;
