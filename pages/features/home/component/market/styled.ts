import styled from "styled-components";
import theme from "../../../../../theme";

const MarketWrapper = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-top: 90px;
  color: ${theme.Colors.while};
`;

const MarketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .grop {
    width: 100%;
    display: flex;
  }
`;

export { MarketWrapper, MarketHeader };
