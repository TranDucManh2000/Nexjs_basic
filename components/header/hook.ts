import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../pages/features/login/authenSlice";
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
  const router = useRouter();
  const dispatch = useDispatch();
  const userStore = useSelector((state: RootState) => state.authenticator.user);

  const nexPage = (e: string) => {
    router.push(e);
  };

  const loginOut = () => {
    localStorage.setItem("user", "");
    dispatch(setUser(null));
  };

  const getUser = () => {
    if (typeof window !== "undefined") {
      var userRolesStr = localStorage.getItem("user");
      if (userRolesStr) {
        const userRoles = JSON.parse(userRolesStr);
        return userRoles;
      }
    }
  };

  useEffect(() => {
    dispatch(setUser(getUser()));
  }, []);

  return {
    ...props,
    dataMenu,
    nexPage,
    loginOut,
    userStore,
  };
};

export type Props = ReturnType<typeof useHeader>;

export default useHeader;
