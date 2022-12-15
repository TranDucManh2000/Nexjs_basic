import {
  CommentOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Avatar, Image, Tooltip } from "antd";
import { FC } from "react";
import { arrayCoins, arrayCoinsIcon } from "../../public/iconCoins/coins";
import ButtonCf from "../button";
import useProduct, { ReceivedProps } from "./hook";
import ProductWrapper from "./styled";

const ProductLayout: FC<ReceivedProps> = ({ arrayProduct }) => {
  return (
    <ProductWrapper>
      {arrayProduct
        ? arrayProduct.map((item: any, index: number) => (
            <div className="marketItem" key={index}>
              <Image
                className="itemImg"
                src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg"
                preview={false}
              />
              <h2>Blessing</h2>
              <div className="share">
                <span>
                  <HeartOutlined className="icon" /> 0
                </span>
                <span>
                  <CommentOutlined className="icon" /> 0
                </span>
                <span>
                  <ShareAltOutlined className="icon" />
                  share
                </span>
              </div>
              <h5>Blockchain</h5>
              <div className="listcoin">
                {arrayCoinsIcon
                  ? arrayCoinsIcon.map((coins: arrayCoins, index: number) => (
                      <Tooltip key={index} placement="top" title={coins.name}>
                        {coins.svg}
                      </Tooltip>
                    ))
                  : ""}
              </div>
              <div className="info">
                <h5>Owned by</h5>
                <h3>0.153 BNB</h3>
              </div>
              <div className="info">
                <div>
                  <Avatar
                    style={{ width: 40, height: 40, marginRight: 10 }}
                    src={`https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg`}
                  />
                  <span>@Mansu</span>
                </div>
                <h6>$ 0.153 </h6>
              </div>
              <div className="info">
                <div></div>
                <div className="grBtn">
                  <ButtonCf variant="yellow" hight={27}>
                    View NFT
                  </ButtonCf>
                  <ButtonCf variant="warning" hight={27}>
                    Buy Now
                  </ButtonCf>
                </div>
              </div>
            </div>
          ))
        : ""}
    </ProductWrapper>
  );
};

const ProductItemNft: FC<ReceivedProps> = (props) => (
  <ProductLayout {...useProduct(props)} />
);

export default ProductItemNft;
