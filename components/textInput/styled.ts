import styled from "styled-components";
import { Input } from "antd";
import theme from "../../theme";

const InputGrop = styled.div`
  input:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${theme.Colors.while};
  }
  .inputStyled {
    height: 40px;
    background-color: ${theme.Colors.black};
    color: ${theme.Colors.while};
    border: 1px solid ${theme.Colors.boder};
    ::placeholder {
      color: ${theme.Colors.boder};
    }
    :hover {
      border-color: ${theme.Colors.warning};
    }
    :focus {
      border-color: ${theme.Colors.warning};
    }
    .ant-input {
      background-color: ${theme.Colors.black} !important;
      color: ${theme.Colors.while};
      ::placeholder {
        color: ${theme.Colors.boder};
      }
    }
    .ant-input-suffix {
      svg {
        color: ${theme.Colors.warning};
      }
    }
  }
`;

const InputWrapper = styled(Input)`
  height: 40px;
  background-color: ${theme.Colors.black};
  color: ${theme.Colors.while};
  border: 1px solid ${theme.Colors.boder};
  ::placeholder {
    color: ${theme.Colors.boder};
  }
  :hover {
    border-color: ${theme.Colors.warning};
  }
  :focus {
    border-color: ${theme.Colors.warning};
  }
  ::before {
    background-color: red;
  }
`;

export { InputWrapper, InputGrop };
