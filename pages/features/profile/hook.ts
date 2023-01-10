import { message } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axiosCf } from "../../../config/libraries/CfAxios";
import { RootState } from "../../../redux/store";
import { ProductReponse } from "../admin/hook";

export type ReceivedProps = Record<string, any>;

const column = ["name", "describes", "coins", "categoryId", "img"];

const useProfile = (props: ReceivedProps) => {
  const authen = useSelector((state: RootState) => state.authenticator.user);
  const [keyTab, setKeyTab] = useState<number>(0);
  const onChange = (key: number) => {
    setKeyTab(key);
  };
  const [isShowing, setisShowing] = useState(false);
  const [arrayProduct, setArrayProduct] = useState([]);
  const [category, setCategory] = useState<any>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const id = router.query.index;

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const errorms = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };

  const onFinish = (values: ProductReponse) => {
    axiosCf.post("/products", {
      name: values.name,
      describes: values.describes,
      coins: Number(values.coins),
      categoryId: values.categoryId,
      img: values.img,
      userId: Number(authen.id),
      userName: authen.name,
      userAvatar: authen.avatar,
    });
    setisShowing(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    id
      ? (async () => {
          try {
            const {
              data: { data },
            } = await axiosCf.get(`products/?userId=${id}`);
            setArrayProduct(data);
          } catch (error) {}
        })()
      : "";
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosCf.get("category");
        setCategory(data);
      } catch (error) {}
    })();
  }, [router]);

  return {
    ...props,
    keyTab,
    onChange,
    arrayProduct,
    isShowing,
    setisShowing,
    onFinish,
    onFinishFailed,
    authen,
    column,
    category,
    contextHolder,
  };
};

export type Props = ReturnType<typeof useProfile>;

export default useProfile;
