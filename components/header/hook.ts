import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuthent } from "../../config/libraries/CfAxios";
import { useSelector } from "react-redux";
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
  const authenStore = useSelector(
    (state: RootState) => state.authenticator.authen
  );
  const [authen, setAuthent] = useState<any>("");
  const router = useRouter();

  const nexPage = (e: string) => {
    router.push(e);
  };

  const loginOut = () => {
    localStorage.setItem("authent", "");
    setAuthent("");
  };

  useEffect(() => {
    setAuthent(getAuthent());
  }, [authenStore]);

  return {
    ...props,
    dataMenu,
    nexPage,
    authen,
    loginOut,
  };
};

export type Props = ReturnType<typeof useHeader>;

export default useHeader;
