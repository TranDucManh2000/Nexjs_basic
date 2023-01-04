import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { axiosCf, getAuthent } from "../../config/libraries/CfAxios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setUser } from "../../pages/features/login/authenSlice";

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
  const dataUser = useSelector((state: RootState) => state.authenticator.user);
  const [authen, setAuthent] = useState<any>("");
  const router = useRouter();
  const dispatch = useDispatch();

  const nexPage = (e: string) => {
    router.push(e);
  };

  const loginOut = () => {
    localStorage.setItem("authent", "");
    setAuthent("");
  };

  useEffect(() => {
    setAuthent(getAuthent());
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosCf.get("user/profile/your");
        dispatch(setUser(data));
      } catch (error) {}
    })();
  }, [authenStore]);

  return {
    ...props,
    dataMenu,
    nexPage,
    authen,
    loginOut,
    dataUser,
  };
};

export type Props = ReturnType<typeof useHeader>;

export default useHeader;
