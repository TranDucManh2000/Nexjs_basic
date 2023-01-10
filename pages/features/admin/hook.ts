import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { axiosCf } from "../../../config/libraries/CfAxios";
export type ReceivedProps = Record<string, any>;

export interface ProductReponse {
  key?: React.Key;
  id?: number;
  name: string;
  describes: string;
  coins: string;
  categoryId: number;
  img: string;
  userId?: number;
  userName: string;
  userAvatar: string;
}
const column = [
  "name",
  "describes",
  "coins",
  "categoryId",
  "img",
  "userId",
  "userName",
  "userAvatar",
];

const useAdmin = (props: ReceivedProps) => {
  const [columns, setColumns] = useState<ColumnsType<ProductReponse>>([]);
  const [datas, setDatas] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [method, setmethod] = useState<string | undefined>(undefined);
  const [form, setForm] = useState<ProductReponse>();
  const [category, setCategory] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        setColumns(
          Object.values(column).map((item: any, index: number) => ({
            title: item,
            dataIndex: item,
            key: index,
          }))
        );
      } catch (error) {}
    })();
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosCf.get("products");
        setDatas(
          Object.values(data).map((item: any, index: number) => ({
            ...item,
            key: index,
          }))
        );
      } catch (error) {}
    })();
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosCf.get("category");
        setCategory(data);
      } catch (error) {}
    })();
  }, []);

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onTab = (key: string) => {
    console.log(key);
  };

  const onAction = (event: ProductReponse, methods: string) => {
    if (methods === "delete") {
      axiosCf.delete(`products/${event.id}`);
    } else {
      setForm(event);
      setmethod(methods);
      setModal();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };
  const onFinish = (values: ProductReponse) => {
    method === "post"
      ? axiosCf.post("/products", {
          name: values.name,
          describes: values.describes,
          coins: Number(values.coins),
          categoryId: values.categoryId,
          img: values.img,
          userId: Number(values.userId),
          userName: values.userName,
          userAvatar: values.userAvatar,
        })
      : axiosCf.put(`products/${form?.id}`, {
          name: values.name,
          describes: values.describes,
          coins: Number(values.coins),
          categoryId: values.categoryId,
          img: values.img,
          userId: Number(values.userId),
          userName: values.userName,
          userAvatar: values.userAvatar,
        });
  };
  return {
    ...props,
    datas,
    onTab,
    columns,
    onAction,
    isModalOpen,
    setModal,
    onFinishFailed,
    onFinish,
    method,
    category,
  };
};

export type Props = ReturnType<typeof useAdmin>;

export default useAdmin;
