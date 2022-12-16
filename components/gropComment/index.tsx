import {
  CommentOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { FC } from "react";
import useComment from "./hook";
import { ReceivedProps } from "./hook";
import CommentWrapper from "./styled";

const CommentLayout: FC<ReceivedProps> = ({ heart, comment }) => {
  return (
    <CommentWrapper>
      <span>
        <HeartOutlined className="icon" /> {heart}
      </span>
      <span>
        <CommentOutlined className="icon" /> {comment}
      </span>
      <span>
        <ShareAltOutlined className="icon" />
        share
      </span>
    </CommentWrapper>
  );
};

const GropComment: FC<ReceivedProps> = (props) => (
  <CommentLayout {...useComment(props)} />
);

export default GropComment;
