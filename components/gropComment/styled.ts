import styled from "styled-components";
import theme from "../../theme";

const CommentWrapper = styled.div`
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
`;

export default CommentWrapper;
