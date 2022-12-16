import { Tooltip } from "antd";
import { FC } from "react";
import { arrayCoins, arrayCoinsIcon } from "../../public/iconCoins/coins";
import useCoins, { ReceivedProps } from "./hook";
import CoinsWrapper from "./styled";

const CoinsLayout: FC<ReceivedProps> = ({ props }) => {
  return (
    <CoinsWrapper>
      {arrayCoinsIcon
        ? arrayCoinsIcon.map((coins: arrayCoins, index: number) => (
            <Tooltip key={index} placement="top" title={coins.name}>
              {coins.svg}
            </Tooltip>
          ))
        : ""}
    </CoinsWrapper>
  );
};

const ListCoins: FC<ReceivedProps> = (props) => (
  <CoinsLayout {...useCoins(props)} />
);

export default ListCoins;
