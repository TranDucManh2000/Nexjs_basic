import styled from "styled-components";
import theme from "../../theme";

const SearchWrapper = styled.div`
  .inpurSearch {
    width: 300px;
    height: 40px;
    border-radius: 40px;
    background-color: ${theme.Colors.black};
    margin-right: 30px;
    :hover {
      border-color: ${theme.Colors.while};
    }
    .ant-input {
      background-color: ${theme.Colors.black};
      color: ${theme.Colors.while};
      ::placeholder {
        color: ${theme.Colors.while};
      }
    }
  }
`;

export default SearchWrapper;
