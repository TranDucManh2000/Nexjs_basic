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
  .ant-select-selector {
    background-color: ${theme.Colors.black} !important;
    color: ${theme.Colors.while};
  }

  .ant-pagination {
    .ant-pagination-prev {
      svg {
        color: ${theme.Colors.while};
      }
    }
    .ant-pagination-next {
      svg {
        color: ${theme.Colors.while};
      }
    }
  }
  .ant-table-container {
    background-color: ${theme.Colors.black};
    .ant-table-cell-scrollbar:not([rowspan]) {
      border: 0px !important;
    }
    .ant-table-body {
      ::-webkit-scrollbar {
        background-color: ${theme.Colors.black};
      }
      ::-webkit-scrollbar-thumb {
        background: ${theme.Colors.boder};
        border-radius: 10px;
      }
    }
    .ant-table-row {
      :hover {
        td {
          background-color: ${theme.Colors.black} !important;
          border-radius: unset !important;
        }
      }
      :not(:hover) {
        td {
          background-color: ${theme.Colors.black} !important;
        }
      }
    }
    .ant-table-cell {
      text-align: center;
      background-color: ${theme.Colors.black};
      color: ${theme.Colors.while};
      border: 1px solid ${theme.Colors.boder} !important;
      :last-child {
        border: 1px solid ${theme.Colors.boder};
      }
    }
  }
  .action {
    display: flex;
    justify-content: center;
    span {
      margin: 15px;
    }
  }
`;

export default AdminWrapper;
