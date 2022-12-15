import { FC } from "react";
import ButtonCf from "../../../../../components/button";
import ProductItemNft from "../../../../../components/productItem";
import useMarket, { arrayCategory, ReceivedProps } from "./hook";
import { MarketHeader, MarketWrapper } from "./styled";

const MarketLayout: FC<ReceivedProps> = ({
  listCategory,
  inMarket,
  onMarket,
  arrayProduct,
}) => {
  return (
    <MarketWrapper>
      <MarketHeader>
        <h1>Explore Marketplace</h1>
        <ButtonCf variant="default" font={15} hight={44}>
          Explore All
        </ButtonCf>
        <div className="grop">
          {listCategory
            ? listCategory.map((category: arrayCategory, index: number) => (
                <ButtonCf
                  key={index}
                  variant={inMarket === index ? "warning" : "default"}
                  hight={28}
                  font={14}
                  onClick={() => onMarket(index)}
                >
                  {category.name}
                </ButtonCf>
              ))
            : ""}
        </div>
      </MarketHeader>
      <ProductItemNft arrayProduct={arrayProduct} />
    </MarketWrapper>
  );
};

const MarketNft: FC<ReceivedProps> = (props) => (
  <MarketLayout {...useMarket(props)} />
);

export default MarketNft;
