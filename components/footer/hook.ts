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
];

const useFooter = (props: ReceivedProps) => {
  return {
    ...props,
    dataMenu,
  };
};

export type Props = ReturnType<typeof useFooter>;

export default useFooter;
