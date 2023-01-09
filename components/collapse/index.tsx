import { FC } from "react";
import useCollapse, { ReceivedProps } from "./hook";
import CollapseWrapper from "./styled";
import { Collapse } from "antd";
import { FastForwardOutlined, HistoryOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const CollapseLayout: FC<ReceivedProps> = ({ ...props }) => {
  const onChange = (key: string | string[]) => {
    // console.log(key);
  };
  return (
    <CollapseWrapper>
      <Collapse
        bordered={false}
        className="collapse"
        expandIcon={({ isActive }) =>
          props.variant === "propeties" ? (
            <FastForwardOutlined style={{ fontSize: 30, color: "#5a5a62" }} />
          ) : (
            <HistoryOutlined style={{ fontSize: 25, color: "#5a5a62" }} />
          )
        }
        defaultActiveKey={["1"]}
        onChange={onChange}
      >
        <Panel header={props.header} key="1">
          <p>No Item</p>
        </Panel>
      </Collapse>
    </CollapseWrapper>
  );
};

const CollapseNft: FC<ReceivedProps> = (props) => (
  <CollapseLayout {...useCollapse(props)} />
);

export default CollapseNft;
