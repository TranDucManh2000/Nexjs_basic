import { Avatar, Card } from "antd";
import { FC } from "react";
import useAvatar, { ReceivedProps } from "./hook";
import AvatarWrapper from "./styled";

const { Meta } = Card;
const AvatarLayout: FC<ReceivedProps> = ({ ...props }) => {
  return (
    <AvatarWrapper>
      <Meta
        className="meta"
        avatar={
          <Avatar
            className="avatar"
            src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg"
          />
        }
        title={props.title}
        description={props.description}
      />
    </AvatarWrapper>
  );
};

const AvatarNft: FC<ReceivedProps> = (props) => (
  <AvatarLayout {...useAvatar(props)} />
);

export default AvatarNft;
