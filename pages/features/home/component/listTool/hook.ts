export type ReceivedProps = Record<string, any>;

const arrayTool = [1, 1, 1, 1, 1, 1, 1, 8];

const useTool = (props: ReceivedProps) => {
  return {
    ...props,
    arrayTool,
  };
};

export type Props = ReturnType<typeof useTool>;

export default useTool;
