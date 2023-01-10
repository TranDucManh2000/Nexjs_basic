import { CommentOutlined } from "@ant-design/icons";
import { Avatar, Form, Image, Select, Tabs } from "antd";
import { FC } from "react";
import ButtonCf from "../../../components/button";
import ListCoins from "../../../components/listCoins";
import Modal from "../../../components/Modal";
import ProductItemNft from "../../../components/productItem";
import TextInput from "../../../components/textInput";
import useProfile from "./hook";
import { ReceivedProps } from "./hook";
import { ProfileWrapper, ProfileBody, YouNFT } from "./styled";

export interface arrayTab {
  label: string;
  children: any;
}
[];

const { Option } = Select;

const ProfileLayout: FC<ReceivedProps> = ({
  keyTab,
  onChange,
  arrayProduct,
  isShowing,
  setisShowing,
  onFinish,
  onFinishFailed,
  authen,
  column,
  category,
  contextHolder,
}) => {
  const listTab = [
    {
      label: "NFT",
      children: (
        <div>
          <YouNFT>
            <div className="youheader">
              Your NFT List
              <ButtonCf
                onClick={() => setisShowing(true)}
                variant="warning"
                hight={30}
              >
                Create NFT
              </ButtonCf>
            </div>
            <Modal
              header={true}
              isShowing={isShowing}
              closeModal={setisShowing}
              headerTitle="Create NFT"
            >
              <Form
                style={{ color: "#fff" }}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <h1>Create Item</h1>
                <p> Start minting your one of a kind NFT and enjoy!</p>
                <ListCoins />
                {column.map((item: any, index: number) =>
                  item === "categoryId" ? (
                    <div key={index}>
                      <h2>{item}</h2>
                      <Form.Item
                        style={{ color: "#fff" }}
                        name={item}
                        rules={[
                          {
                            required: true,
                            message: `Please input your ${item}!`,
                          },
                        ]}
                      >
                        <Select placeholder="Select Category" allowClear>
                          {category.length > 0
                            ? category.map((cate: any, index: number) => (
                                <Option value={cate.id} key={index}>
                                  {cate.name}
                                </Option>
                              ))
                            : ""}
                        </Select>
                      </Form.Item>
                    </div>
                  ) : (
                    <div key={index}>
                      <h2>{item}</h2>
                      <Form.Item
                        style={{ color: "#fff" }}
                        name={item}
                        rules={[
                          {
                            required: true,
                            message: `Please input your ${item}!`,
                          },
                        ]}
                      >
                        <TextInput placeholder={item} />
                      </Form.Item>
                    </div>
                  )
                )}
                <Form.Item>
                  <ButtonCf
                    style={{ width: "100%", marginLeft: "-5px" }}
                    variant="warning"
                    htmlType="submit"
                  >
                    Create
                  </ButtonCf>
                </Form.Item>
              </Form>
            </Modal>
            <div>
              <ProductItemNft arrayProduct={arrayProduct} />
            </div>
          </YouNFT>
        </div>
      ),
    },
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
  return (
    <ProfileWrapper>
      {contextHolder}
      <Image
        className="imgHeader"
        preview={false}
        width={"100%"}
        src="https://loobr.com/_next/image?url=%2Fassets%2Fimages%2Fcollectionimages%2Fcover.jpg&w=1920&q=75"
      />
      <ProfileBody>
        <div className="GropUser">
          <div
            className="user"
            style={authen ? { height: 550 } : { height: 497 }}
          >
            <Avatar
              className="avatar"
              src="https://loobr.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdq3jqnrem%2Fimage%2Fupload%2Fv1669155199%2Fjrtdx8u1znn3k0olbi1p.png&w=1920&q=75"
            />
            <h2>@SQUIDTAMA NFTS</h2>
            <h3>@squidtama</h3>
            <h4>Netherlands 🇳🇱</h4>
            <div className="uid">UID:00000</div>
            {authen && (
              <div className="follow">
                <ButtonCf variant="warning">Follow</ButtonCf>
                <CommentOutlined className="icon" />
              </div>
            )}
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
              children: tab.children,
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
