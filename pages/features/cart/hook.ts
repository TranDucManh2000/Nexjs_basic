export type ReceivedProps = Record<string, any>;

const useCart = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useCart>;

export default useCart;
