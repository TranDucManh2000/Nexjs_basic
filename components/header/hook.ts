export type ReceivedProps = Record<string, any>;

export interface dataMenus {
  name: string;
  url: string;
}
[];

const dataMenu = [
  {
    name: "Marketplace",
    url: "url",
  },
  {
    name: "Social Feed",
    url: "url",
  },
  {
    name: "Trends",
    url: "url",
  },
  {
    name: "Mystery Box",
    url: "url",
  },
];

const useHeader = (props: ReceivedProps) => {
  return {
    ...props,
    dataMenu,
  };
};

export type Props = ReturnType<typeof useHeader>;

export default useHeader;
