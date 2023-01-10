import styled from "styled-components";
import theme from "../../theme";

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: left;
  gap: 15px;
  .marketItem {
    background-color: ${theme.Background.gray};
    width: 24%;
    min-height: 680px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    min-width: 350px;
    .itemImg {
      border-radius: 10px;
      background-color: ${theme.Background.gray};
      margin-bottom: 20px;
      min-height: 300px;
    }
    :hover {
      border: 2px solid ${theme.Colors.warning};
      box-shadow: ${theme.Colors.warning} 0px 1px 0px,
        ${theme.Colors.warning} 0px 0px 8px;
    }
    .info {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > h3 {
        color: ${theme.Colors.warning};
      }
      .grBtn {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 1800px) {
    .marketItem {
      width: 32%;
    }
  }
  @media screen and (max-width: 1500px) {
    .marketItem {
      width: 48%;
    }
  }
  @media screen and (max-width: 800px) {
    .marketItem {
      width: 90%;
    }
  }
`;

export default ProductWrapper;
