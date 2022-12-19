import { Avatar, Image, Tabs } from "antd";
import { FC } from "react";
import ButtonCf from "../../../components/button";
import ListCoins from "../../../components/listCoins";
import useProfile from "./hook";
import { ReceivedProps } from "./hook";
import { ProfileWrapper, ProfileBody } from "./styled";

export interface arrayTab {
  label: string;
  children: string;
}
[];

const listTab = [
  {
    label: "Feed",
    children: `Content of Tab Pane Feed`,
  },
  {
    label: "For Sale",
    children: `Content of Tab Pane Sale`,
  },
  {
    label: " Collections",
    children: `Content of Tab Pane  Collections`,
  },
];

const ProfileLayout: FC<ReceivedProps> = ({ keyTab, onChange }) => {
  return (
    <ProfileWrapper>
      <Image
        className="imgHeader"
        preview={false}
        width={"100%"}
        src="https://loobr.com/_next/image?url=%2Fassets%2Fimages%2Fcollectionimages%2Fcover.jpg&w=1920&q=75"
      />
      <ProfileBody>
        <div className="GropUser">
          <div className="user">
            <Avatar
              className="avatar"
              src="https://loobr.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdq3jqnrem%2Fimage%2Fupload%2Fv1669155199%2Fjrtdx8u1znn3k0olbi1p.png&w=1920&q=75"
            />
            <h2>@SQUIDTAMA NFTS</h2>
            <h3>@squidtama</h3>
            <h4>Netherlands 🇳🇱</h4>
            <div className="uid">UID:00000</div>
            <p>Since July 2022</p>
            <ListCoins />
            <p style={{ fontSize: 12 }}>Co- Founder SQUIDTAMA 🔥 @squidtama</p>
            <div className="gropLike">
              <div>
                <span>Likes</span>
                <p>0</p>
              </div>
              <div>
                <span>Followers</span>
                <p>0</p>
              </div>
              <div>
                <span>Following</span>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
        <Tabs
          defaultActiveKey="0"
          className="tab"
          items={listTab.map((tab: arrayTab, index: number) => {
            return {
              label: (
                <ButtonCf
                  key={index}
                  hight={28}
                  variant={index === keyTab ? "warning" : "default"}
                  onClick={() => onChange(index)}
                >
                  {tab.label}
                </ButtonCf>
              ),
              key: `${index}`,
              children: `Content of Tab Pane ${index}`,
            };
          })}
        />
      </ProfileBody>
    </ProfileWrapper>
  );
};

const ProfileNft: FC<ReceivedProps> = (props) => (
  <ProfileLayout {...useProfile(props)} />
);

export default ProfileNft;
