import styled from "styled-components";
import theme from "../../../../../theme";

const TopWrapper = styled.div`
  margin-top: 80px;
  margin-left: 5%;
  color: ${theme.Colors.while};
  .user {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    > h1 {
      width: 100%;
      font-size: 39px;
      font-weight: bold;
    }
    .avatar {
      width: 50px;
      height: 50px;
    }
    .card {
      margin: 10px;
      width: 440px;
      background-color: ${theme.Colors.black};
      font-family: ${theme.FontFamily.Proxima};
      .ant-card-meta-title {
        color: ${theme.Colors.while};
        font-weight: bold;
      }
      .ant-card-meta-description {
        color: ${theme.Colors.while};
      }
      :hover {
        background-color: ${theme.Hover.gray};
      }
    }
  }
  .featured {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: -5%;
    font-family: ${theme.FontFamily.Proxima};
    > h1 {
      width: 100%;
      font-size: 39px;
      font-weight: bold;
      margin-bottom: 100px;
      margin-left: 5%;
    }
    .zoom {
      background-color: green;
      transition: transform 0.2s; /* Animation */
      border-radius: 10px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      cursor: pointer;
      .text {
        display: none;
        color: ${theme.Colors.while};
        margin-left: 5%;
        margin-top: 5%;
        > div {
          display: flex;
          flex-wrap: wrap;
          text-align: left;
          align-items: center;
          > span {
            font-weight: bold;
            font-size: 20px;
            margin-left: 10px;
          }
        }
        .price {
          display: flex;
          flex-wrap: wrap;
          position: absolute;
          bottom: 0;
          > h1 {
            width: 100%;
          }
          > h2 {
            color: ${theme.Colors.warning};
            width: 100%;
            font-size: 16px;
          }
          > p {
            color: "#757575";
            font-size: 12px;
          }
        }
      }
      :hover {
        transform: scale(1.5);
        z-index: 15 !important;
        .text {
          display: block;
        }
      }
    }
  }
`;

export default TopWrapper;
