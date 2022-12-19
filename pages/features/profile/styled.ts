import styled from "styled-components";
import theme from "../../../theme";

const ProfileWrapper = styled.div`
  margin-top: ${theme.Distance.header};
  width: 100%;
  .imgHeader {
    height: 350px;
  }
`;

const ProfileBody = styled.div`
  width: 90%;
  margin-left: 5%;
  display: flex;
  .GropUser {
    margin-top: -100px;
    z-index: 1;
    width: 302px;
    display: flex;
    flex-wrap: wrap;
    .user {
      width: 100%;
      background-color: ${theme.Colors.black};
      border-radius: 20px;
      border: solid 0.5px ${theme.Colors.boder};
      padding: 20px;
      color: ${theme.Colors.while};
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      .avatar {
        width: 120px;
        height: 120px;
        border: 10px solid ${theme.Background.gray};
      }
      h2 {
        margin-top: 20px;
        margin-bottom: 10px;
        width: 100%;
      }
      h3 {
        color: ${theme.Colors.boder};
        width: 100%;
      }
      h4 {
        width: 100%;
      }
      p {
        width: 100%;
        color: ${theme.Colors.boder};
      }
      .uid {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid ${theme.Colors.boder};
        min-width: 150px;
        margin-bottom: 30px;
      }
      .gropLike {
        display: flex;
        width: 100%;
        justify-content: center;
        text-align: center;
        > div {
          width: 33%;
          height: 35px;
          :not(:last-child) {
            border-right: 2px solid ${theme.Colors.boder};
          }
          > span {
            font-size: 11px;
            color: ${theme.Colors.boder};
          }
          > p {
            color: ${theme.Colors.while};
            margin-top: 2px;
          }
        }
      }
    }
  }
  .tab {
    margin-top: 30px;
    margin-left: 30px;
    color: white;
    .ant-tabs-ink-bar-animated {
      display: none;
    }
    .ant-tabs-tab {
      padding: 0;
    }
    .ant-tabs-tab {
      margin: 0;
    }
    .ant-tabs-content-holder {
      margin-left: 5px;
    }
  }
`;

export { ProfileWrapper, ProfileBody };
