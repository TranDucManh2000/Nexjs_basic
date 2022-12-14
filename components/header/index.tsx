import { Image } from "antd";
import { FC } from "react";
import ButtonCf from "../button";
import SearchNft from "../search";
import useHeader, { dataMenus } from "./hook";
import { ReceivedProps } from "./hook";
import HeaderWrapper from "./styled";

const HeaderLayout: FC<ReceivedProps> = ({ dataMenu }) => {
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
            <span className="text" key={index}>
              {vl.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <SearchNft />
        <ButtonCf variant="default">Create NFT</ButtonCf>
        <ButtonCf variant="warning">Register/Login</ButtonCf>
      </div>
    </HeaderWrapper>
  );
};

const Header: FC<ReceivedProps> = (props) => (
  <HeaderLayout {...useHeader(props)} />
);

export default Header;
