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
                      src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/283340299_1063601274365849_4795855512102228157_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=10aySNwCBeYAX-L_KAC&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDCZ0pP7-v7PJv4HKEkovf8PsojnkLYz1yVCcmjfjXfdg&oe=63B95BE9"
                    />
                  }
                  title="@TranManh"
                  description="Developers"
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
