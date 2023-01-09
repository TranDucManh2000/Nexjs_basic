import {
  BellFilled,
  BellOutlined,
  LogoutOutlined,
  ShoppingFilled,
} from "@ant-design/icons";
import { Image } from "antd";
import { FC } from "react";
import LoginNft from "../../pages/features/login";
import AvatarNft from "../avatar";
import ButtonCf from "../button";
import PopoverNft from "../popover";
import SearchNft from "../search";
import useHeader, { dataMenus } from "./hook";
import { ReceivedProps } from "./hook";
import HeaderWrapper from "./styled";

const HeaderLayout: FC<ReceivedProps> = ({
  dataMenu,
  nexPage,
  loginOut,
  userStore,
}) => {
  const bell = (
    <div className="gropBell">
      <div className="header">
        <h3>Notifications</h3>
        <span>See All</span>
      </div>
      <div className="body">
        <BellFilled className="icon" />
        <h2>You’re all caught up! </h2>
        <span>No new notifications.</span>
      </div>
    </div>
  );

  const formUser = (
    <div className="avatar">
      {userStore ? (
        <AvatarNft
          title={userStore.name}
          dataImg={userStore.avatar}
          description="view profile"
        />
      ) : (
        ""
      )}

      <ButtonCf className="btn" variant="warning">
        Connect Wallet
      </ButtonCf>
      <div>
        <ShoppingFilled className="outIcon" /> Shopping Cart
      </div>
      <div onClick={loginOut}>
        <LogoutOutlined className="outIcon" /> Logout
      </div>
    </div>
  );
  return (
    <HeaderWrapper>
      <div>
        <Image
          preview={false}
          src="https://loobr.com/assets/images/loobr.svg"
          width={150}
          height={75}
        />
        <div>
          {dataMenu.map((vl: dataMenus, index: number) => (
            <span className="text" key={index} onClick={() => nexPage(vl.url)}>
              {vl.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <SearchNft />
        {userStore && (
          <>
            <PopoverNft active={true} content={bell}>
              <div className="bell">
                <BellOutlined className="icon" />
              </div>
            </PopoverNft>
            <div className="bell">
              <ShoppingFilled
                onClick={() => nexPage("/features/cart")}
                className="icon"
              />
            </div>
          </>
        )}
        <ButtonCf variant="default">Create NFT</ButtonCf>
        {userStore ? (
          <PopoverNft active={true} content={formUser}>
            <div>
              <AvatarNft dataImg={userStore.avatar} />
            </div>
          </PopoverNft>
        ) : (
          <LoginNft />
        )}
      </div>
    </HeaderWrapper>
  );
};

const Header: FC<ReceivedProps> = (props) => (
  <HeaderLayout {...useHeader(props)} />
);

export default Header;
