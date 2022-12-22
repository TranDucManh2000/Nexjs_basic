import React, { FC } from "react";
import usePopover from "./hook";
import { ReceivedProps } from "./hook";
import { PopoverOverlay } from "./styled";

const PopoverLayout: React.FC<ReceivedProps> = ({ ...props }) => {
  return (
    <React.Fragment>
      <PopoverOverlay>
        <div onClick={() => props.setActive(!props.active)}>
          {props.children}
        </div>
        {props.active && <div className="children">{props.content}</div>}
      </PopoverOverlay>
    </React.Fragment>
  );
};

const PopoverNft: FC<ReceivedProps> = (props) => (
  <PopoverLayout {...usePopover(props)} />
);

export default PopoverNft;
