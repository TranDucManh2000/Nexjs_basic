import { Avatar, Card } from "antd";
import { FC } from "react";
import useSlider, { arrayFeatureds } from "./hook";
import { ReceivedProps } from "./hook";
import TopWrapper from "./styled";

const { Meta } = Card;
const TopLayout: FC<ReceivedProps> = ({ dataUser, dataFeatured }) => {
  return (
    <TopWrapper>
      <div className="user">
        <h1>Top Users</h1>
        {dataUser
          ? dataUser.map((vl: any, index: number) => (
              <Card key={index} className="card">
                <Meta
                  avatar={
                    <Avatar
                      className="avatar"
                      src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg"
                    />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            ))
          : ""}
      </div>
      <div className="featured">
        <h1>Featured NFTs</h1>
        {dataFeatured
          ? dataFeatured.map((vl: arrayFeatureds, index: number) => (
              <div
                key={index}
                className="zoom"
                style={{
                  width: vl.width,
                  height: vl.height,
                  zIndex: vl.zindex,
                  marginLeft: -vl.margin,
                  backgroundImage: `url("${vl.img}")`,
                }}
              >
                <div className="text">
                  <div>
                    <Avatar
                      style={{ width: 50, height: 50 }}
                      src={`${vl.avatar}`}
                    />
                    <span>@{vl.userName}</span>
                  </div>
                  <div className="price">
                    <h1>{vl.name}</h1>
                    <h2>{vl.coin}</h2>
                    <p>$ {vl.dola}</p>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </TopWrapper>
  );
};

const TopNft: FC<ReceivedProps> = (props) => (
  <TopLayout {...useSlider(props)} />
);

export default TopNft;
