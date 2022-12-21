import { BellOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { FC } from "react";
import LoginNft from "../../pages/features/login";
import ButtonCf from "../button";
import SearchNft from "../search";
import useHeader, { dataMenus } from "./hook";
import { ReceivedProps } from "./hook";
import HeaderWrapper from "./styled";

const HeaderLayout: FC<ReceivedProps> = ({ dataMenu, nexPage, authen }) => {
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
        <div className="bell">
          <BellOutlined className="icon" />
        </div>
        <ButtonCf variant="default">Create NFT</ButtonCf>
        <LoginNft />
      </div>
    </HeaderWrapper>
  );
};

const Header: FC<ReceivedProps> = (props) => (
  <HeaderLayout {...useHeader(props)} />
);

export default Header;
