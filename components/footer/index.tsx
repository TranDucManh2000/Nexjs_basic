import {
  GithubFilled,
  GitlabFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Image, Input } from "antd";
import { FC } from "react";
import ButtonCf from "../button";
import useFooter, { ReceivedProps } from "./hook";
import { FooterContainer, Footerlicense, FooterWrapper } from "./styled";

const FooterLayout: FC<ReceivedProps> = ({ dataMenu }) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div>
          <Image
            preview={false}
            src="https://loobr.com/assets/images/loobr.svg"
            width={125}
            height={61}
          />
          <p>
            The next generation `all-in-one` cross-chain marketplace for
            players, creators and traders, with state-of-the-art and
            custom-designed social media features for all users.
          </p>
          <div className="icon">
            <TwitterCircleFilled />
            <GithubFilled />
            <GitlabFilled />
            <InstagramFilled />
          </div>
        </div>
        {dataMenu
          ? dataMenu.map((data: any, index: number) => (
              <div key={index} className="gropText">
                <h3>Quick Links</h3>
                <p>MetaRuffy</p>
                <p>RuffyWorld </p>
                <p>Press</p>
                <p>Whitepaper</p>
                <p>Docs</p>
                <p>FAQs</p>
              </div>
            ))
          : ""}
        <div>
          <h3>Newsletter</h3>
          <p>Please enter your email to get latest news and updates</p>
          <Input width={10} placeholder="Your Email" />
          <ButtonCf
            font={14}
            variant="warning"
            hight={30}
            style={{ marginTop: 20 }}
          >
            Submit
          </ButtonCf>
        </div>
      </FooterContainer>
      <Footerlicense>
        <p>2022 © Tran Manh - All rights reserved.</p>
      </Footerlicense>
    </FooterWrapper>
  );
};

const FooterNft: FC<ReceivedProps> = (props) => (
  <FooterLayout {...useFooter(props)} />
);

export default FooterNft;
