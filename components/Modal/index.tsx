import { CloseCircleOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import useModal, { Props, ReceivedProps } from "./hook";
import { ModalContainer, ModalHeader, ModalOverlay } from "./styled";

const ModalLayout: React.FC<Props> = ({
  children,
  isShowing,
  header,
  headerTitle,
  closeModal,
}) => {
  return (
    <React.Fragment>
      {isShowing && (
        <ModalOverlay>
          <ModalContainer>
            {header && (
              <ModalHeader>
                <span></span>
                <span>{headerTitle}</span>
                <span>
                  <CloseCircleOutlined
                    style={{ fontSize: 20 }}
                    onClick={() => (closeModal ? closeModal() : null)}
                  />
                </span>
              </ModalHeader>
            )}
            {children}
          </ModalContainer>
        </ModalOverlay>
      )}
    </React.Fragment>
  );
};

const Modal: FC<ReceivedProps> = (props) => (
  <ModalLayout {...useModal(props)} />
);

export default Modal;
