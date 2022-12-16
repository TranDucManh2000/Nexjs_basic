import {
  HeartOutlined,
  SafetyCertificateFilled,
  ShoppingFilled,
} from "@ant-design/icons";
import { Dropdown, Image, Input } from "antd";
import { FC } from "react";
import AvatarNft from "../../../components/avatar";
import ButtonCf from "../../../components/button";
import ListCoins from "../../../components/listCoins";
import RateNft from "../../../components/rate";
import useProduct, { ReceivedProps } from "./hook";
import { ProductWrapper } from "./styled";
import GropComment from "../../../components/gropComment";
import CollapseNft from "../../../components/collapse";

const ProductLayout: FC<ReceivedProps> = ({ items }) => {
  return (
    <ProductWrapper>
      <div className="container">
        <div>
          <Image
            preview={false}
            width={"100%"}
            src="https://loobr.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdq3jqnrem%2Fimage%2Ffetch%2Fhttps%3A%2F%2Fbackend.mintables.club%2Frevealer%2F992%2Fimages%2F4655.png&w=1920&q=75"
            style={{ borderRadius: 10 }}
          />
          <div>
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <ButtonCf>
                <SafetyCertificateFilled style={{ fontSize: 20 }} />
                Proof of authenticity
              </ButtonCf>
            </Dropdown>

            <GropComment heart={0} comment={0} />
          </div>
          <div>
            <Input className="input" placeholder="comment" />
            <ButtonCf variant="warning">Submit</ButtonCf>
          </div>
          <h1 style={{ marginTop: 30 }}>Comment</h1>
          <hr />
          <div style={{ marginTop: 30 }}>
            <div>
              <AvatarNft title="@TranManh" description="12h" />
              <div className="comment">
                compiled client and server successfully in 680 ms (2948 modules)
              </div>
            </div>
            <div>
              <HeartOutlined /> 10
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Meta Ruffy Land #1468</h2>
            <AvatarNft title="Manh" description="@TranManh" />
          </div>
          <div>
            <ListCoins />
          </div>
          <div style={{ marginTop: 30 }}>
            <span>
              <span>Creator:</span> 0% Royalties
            </span>
          </div>
          <div>
            <h2>
              Price <span className="coins">9,184.08 MATIC</span>{" "}
              <span className="dola">$8,152.71</span>
            </h2>
            <RateNft />
          </div>
          <p style={{ marginTop: 30 }}>
            10000 Bored Mad Apes on polygon blockchain with over 300 traits all
            unique and stylish.
          </p>
          <h2 style={{ marginTop: 30 }}>Collection</h2>
          <AvatarNft title="@TranManh" />
          <div style={{ marginTop: 50, marginBottom: 20 }}>
            <span></span>
            <ButtonCf variant="warning" hight={52} font={22}>
              <ShoppingFilled />
              Buy Now
            </ButtonCf>
          </div>
          <CollapseNft variant="propeties" key={1} header="Propeties" />
          <CollapseNft variant="history" key={1} header="History" />
        </div>
      </div>
    </ProductWrapper>
  );
};

const ProductNft: FC<ReceivedProps> = (props) => (
  <ProductLayout {...useProduct(props)} />
);

export default ProductNft;
