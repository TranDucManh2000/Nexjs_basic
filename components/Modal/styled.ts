import styled from "styled-components";
import theme from "../../theme";

export const ModalContainer = styled.div`
  position: relative;
  background-color: ${theme.Colors.black};
  border-radius: 10px;
  font-size: 16px;
  min-width: 556px;
  min-height: 248px;
  padding: 20px;
  color: ${theme.Colors.while};
`;

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  padding-bottom: 8px;
`;

export const ModalBody = styled.div`
  font-style: italic;
  padding: 8px 0;
  text-align: left;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.Colors.boder};
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 16px;
`;
