import { FC } from "react";
import useRate, { ReceivedProps } from "./hook";
import RateWrapper from "./styled";

import { Rate } from "antd";
const RateLayout: FC<ReceivedProps> = ({ desc, value, setValue }) => {
  return (
    <RateWrapper>
      <span>
        <Rate tooltips={desc} onChange={setValue} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </span>
    </RateWrapper>
  );
};

const RateNft: FC<ReceivedProps> = (props) => (
  <RateLayout {...useRate(props)} />
);

export default RateNft;
