import styled from "styled-components";
import theme from "../../../theme";

const CartWrapper = styled.div`
  margin-top: ${theme.Distance.header};
  width: 100%;
  .gropCart {
    color: ${theme.Colors.while};
    width: 90%;
    margin-left: 5%;
    margin-top: 50px;
    .cart {
      display: flex;
      gap: 20px;
      width: 100%;
      min-height: 150px;
      border: 1px solid ${theme.Colors.boder};
      border-radius: 10px;
      padding: 10px;
      .itemImg {
        width: 150px;
      }
    }
  }
`;

export default CartWrapper;
