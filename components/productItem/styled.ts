import styled from "styled-components";
import theme from "../../theme";

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .marketItem {
    margin-top: 30px;
    background-color: ${theme.Background.gray};
    width: 24%;
    height: 780px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    .itemImg {
      border-radius: 10px;
      background-color: ${theme.Background.gray};
      margin-bottom: 20px;
    }
    :hover {
      border: 2px solid ${theme.Colors.warning};
      box-shadow: ${theme.Colors.warning} 0px 1px 0px,
        ${theme.Colors.warning} 0px 0px 8px;
    }
    .listcoin {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      > svg {
        margin-right: 5px;
      }
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
    .share {
      margin-top: 30px;
      margin-bottom: 30px;
      > span:nth-last-child(1) {
        margin: 10px;
        .icon {
          margin-right: 10px;
          :hover {
            color: blue;
          }
        }
      }
      > span:nth-last-child(2) {
        margin: 10px;
        .icon {
          margin-right: 10px;
          :hover {
            color: yellow;
          }
        }
      }
      > span:nth-last-child(3) {
        margin: 10px;
        .icon {
          margin-right: 10px;
          :hover {
            color: red;
          }
        }
      }
    }
  }
`;

export default ProductWrapper;
