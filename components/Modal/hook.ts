import { PropsWithChildren } from "react";

export type ReceivedProps = PropsWithChildren & {
  isShowing: boolean;
  header?: boolean;
  headerTitle?: string;
  closeModal?: Function;
};

const useModal = (props?: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useModal>;

export default useModal;
