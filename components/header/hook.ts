import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../redux/store";

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
  const authen = useSelector((state: RootState) => state.authenticator.authen);
  const router = useRouter();
  const nexPage = (e: string) => {
    router.push(e);
  };
  return {
    ...props,
    dataMenu,
    nexPage,
    authen,
  };
};

export type Props = ReturnType<typeof useHeader>;

export default useHeader;
