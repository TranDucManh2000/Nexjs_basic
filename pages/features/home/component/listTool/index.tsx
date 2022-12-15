import { SecurityScanFilled } from "@ant-design/icons";
import { FC } from "react";
import useTool, { ReceivedProps } from "./hook";
import ToolWrapper from "./styled";

const ToolLayout: FC<ReceivedProps> = ({ arrayTool }) => {
  return (
    <ToolWrapper>
      <h1>Almost everything you need</h1>
      <div className="gropTool">
        {arrayTool
          ? arrayTool.map((tool: any, index: number) => (
              <div key={index}>
                <SecurityScanFilled
                  style={{ fontSize: 60, marginBottom: 20, marginTop: 10 }}
                />
                <h2>Cross-Chain</h2>
                <p>
                  LooBr.com is a true cross-chain marketplace, currently
                  supporting BSC, Ethereum, Avalanche, Polygon, Solana, and
                  Cardano NFTs. As we continuously implement improvements to our
                  platform, additional popular blockchains will be added. LooBr
                  innovation!
                </p>
              </div>
            ))
          : ""}
      </div>
    </ToolWrapper>
  );
};

const ToolNft: FC<ReceivedProps> = (props) => (
  <ToolLayout {...useTool(props)} />
);

export default ToolNft;
