import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../redux/store";
import { setAuthen } from "../../pages/features/login/authenSlice";

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
  const dispatch = useDispatch();
  const nexPage = (e: string) => {
    router.push(e);
  };
  const loginOut = () => {
    dispatch(setAuthen(""));
  };
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
