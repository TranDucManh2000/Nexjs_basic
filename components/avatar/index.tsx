import { Avatar, Card } from "antd";
import { useRouter } from "next/router";
import { FC } from "react";
import useAvatar, { ReceivedProps } from "./hook";
import AvatarWrapper from "./styled";

const { Meta } = Card;
const AvatarLayout: FC<ReceivedProps> = ({ ...props }) => {
  const router = useRouter();
  const nexPage = (e: string) => {
    router.push(e);
  };
  return (
    <AvatarWrapper
      onClick={() => (props.dataLink ? nexPage(`${props.dataLink}`) : null)}
    >
      <Meta
        className="meta"
        avatar={
          <Avatar
            className="avatar"
            src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg"
          />
        }
        title={
          <div>
            {props.title}
            <span className="timeLine">
              {" "}
              {props.timeLine ? props.timeLine : null}
            </span>
          </div>
        }
        description={props.description}
      />
    </AvatarWrapper>
  );
};

const AvatarNft: FC<ReceivedProps> = (props) => (
  <AvatarLayout {...useAvatar(props)} />
);

export default AvatarNft;
