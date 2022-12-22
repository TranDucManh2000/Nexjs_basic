import { Image } from "antd";
import { FC } from "react";
import useCart from "./hook";
import { ReceivedProps } from "./hook";
import CartWrapper from "./styled";

const CartLayout: FC<ReceivedProps> = ({ props }) => {
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
          <h2>Name : DEMO</h2>
        </div>
      </div>
    </CartWrapper>
  );
};

const CartNft: FC<ReceivedProps> = (props) => (
  <CartLayout {...useCart(props)} />
);

export default CartNft;
