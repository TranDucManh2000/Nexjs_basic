export type ReceivedProps = Record<string, any>;

const useHome = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useHome>;

export default useHome;
