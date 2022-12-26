import { FC } from "react";
import ToolNft from "./component/listTool";
import MarketNft from "./component/market";
import SliderNft from "./component/slider";
import TopNft from "./component/top";
import useHome, { ReceivedProps } from "./hook";
import HomeWrapper from "./styled";

const HomeLayout: FC<ReceivedProps> = ({ current, img, setImg }) => {
  return (
    <HomeWrapper>
      <SliderNft />
      <TopNft />
      <MarketNft />
      <ToolNft />
    </HomeWrapper>
  );
};

const HomeNft: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHome(props)} />
);

export default HomeNft;
