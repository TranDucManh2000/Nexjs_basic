export type ReceivedProps = Record<string, any>;

const useCoins = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useCoins>;

export default useCoins;
