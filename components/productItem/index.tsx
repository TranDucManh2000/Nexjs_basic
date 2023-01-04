import { Image } from "antd";
import { FC } from "react";
import { arrayProducts } from "../../pages/features/home/component/market/hook";
import AvatarNft from "../avatar";
import ButtonCf from "../button";
import GropComment from "../gropComment";
import ListCoins from "../listCoins";
import useProduct, { ReceivedProps } from "./hook";
import ProductWrapper from "./styled";

const ProductLayout: FC<ReceivedProps> = ({ arrayProduct, nexPage }) => {
  return (
    <ProductWrapper>
      {arrayProduct
        ? arrayProduct.map((item: arrayProducts, index: number) => (
            <div className="marketItem" key={index}>
              <Image
                className="itemImg"
                src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg"
                preview={false}
              />
              <h2>{item.name}</h2>
              <GropComment heart={0} comment={0} />
              <h5>Blockchain</h5>
              <ListCoins />
              <div className="info">
                <h5>Owned by</h5>
                <h3>{item.coins} BNB</h3>
              </div>
              <div className="info">
                <AvatarNft
                  title={`@${item.name}`}
                  dataLink="/features/profile"
                />
                <h6>${item.coins}</h6>
              </div>
              <div className="info">
                <div></div>
                <div className="grBtn">
                  <ButtonCf
                    onClick={() => nexPage("/features/product/1")}
                    variant="yellow"
                    hight={27}
                  >
                    View NFT
                  </ButtonCf>
                  <ButtonCf
                    onClick={() => nexPage("/features/product/1")}
                    variant="warning"
                    hight={27}
                  >
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
