import { useRouter } from "next/router";

export type ReceivedProps = Record<string, any>;

export interface dataMenus {
  name: string;
  url: string;
}
[];

const dataMenu = [
  {
    name: "Marketplace",
    url: "/",
  },
  {
    name: "Social Feed",
    url: "/",
  },
  {
    name: "Trends",
    url: "/",
  },
  {
    name: "Mystery Box",
    url: "/",
  },
];

const useHeader = (props: ReceivedProps) => {
  const router = useRouter();
  const nexPage = (e: string) => {
    router.push(e);
  };
  return {
    ...props,
    dataMenu,
    nexPage,
  };
};

export type Props = ReturnType<typeof useHeader>;

export default useHeader;
