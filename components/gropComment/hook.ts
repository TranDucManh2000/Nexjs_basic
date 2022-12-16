export type ReceivedProps = Record<string, any>;

const useComment = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useComment>;

export default useComment;
