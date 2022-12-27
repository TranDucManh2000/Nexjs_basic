import styled from "styled-components";
import theme from "../../../theme";

const AdminWrapper = styled.div`
  margin-top: ${theme.Distance.header};
  width: 100%;
  .tabs {
    margin-top: 20px;
    width: 92%;
    margin-left: 4%;
    color: ${theme.Colors.while};
  }
`;

export default AdminWrapper;
