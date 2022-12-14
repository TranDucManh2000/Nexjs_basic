import { Carousel, Image } from "antd";
import { FC } from "react";
import ButtonCf from "../../../../../components/button";
import useSlider from "./hook";
import { ReceivedProps } from "./hook";
import SliderWrapper from "./styled";

const SliderLayout: FC<ReceivedProps> = ({ dataSlider }) => {
  return (
    <SliderWrapper>
      <Carousel autoplay>
        {dataSlider
          ? dataSlider.map((vl: any, index: number) => (
              <div key={index}>
                <div
                  style={{
                    backgroundImage: `url("${vl.url}")`,
                  }}
                  className="background"
                >
                  <div>
                    <h1>CREATE TRADE CONNECT</h1>
                    <h2>NFT Trading Platform</h2>
                    <p>
                      Design, Buy and Sell digital art and more. Use our
                      interactive social features and release your limitless
                      imagination. Welcome to the start of something great!
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <ButtonCf font={20} hight={56} variant="warning">
                      <Image
                        width={40}
                        height={40}
                        preview={false}
                        src="https://loobr.com/assets/images/banr2.svg"
                      ></Image>
                      Certik Audit
                    </ButtonCf>
                    <ButtonCf font={20} hight={56} variant="warning">
                      <Image
                        width={40}
                        height={40}
                        preview={false}
                        src="https://loobr.com/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fmr-logo.png&w=48&q=75"
                      ></Image>
                      Whitepaper
                    </ButtonCf>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </Carousel>
    </SliderWrapper>
  );
};

const SliderNft: FC<ReceivedProps> = (props) => (
  <SliderLayout {...useSlider(props)} />
);

export default SliderNft;
