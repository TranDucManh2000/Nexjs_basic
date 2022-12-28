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
}

const useAdmin = (props: ReceivedProps) => {
  const [columns, setColumns] = useState<ColumnsType<ProductReponse>>([]);
  const [data, setData] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [method, setmethod] = useState<string | undefined>(undefined);
  const [form, setForm] = useState<ProductReponse>();
  const [category, setCategory] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { result },
        } = await axiosCf.get("product/colum");
        setColumns(
          Object.values(result).map(({ COLUMN_NAME }: any, index: number) => ({
            title: COLUMN_NAME,
            dataIndex: COLUMN_NAME,
            key: index,
          }))
        );
      } catch (error) {}
    })();
    (async () => {
      try {
        const {
          data: { result },
        } = await axiosCf.get("product");
        setData(
          Object.values(result).map((item: any, index: number) => ({
            ...item,
            key: index,
          }))
        );
      } catch (error) {}
    })();
    (async () => {
      try {
        const {
          data: { result },
        } = await axiosCf.get("category");
        setCategory(result);
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
      axiosCf.delete(`product/${event.id}`);
    } else {
      setForm(event);
      setmethod(methods);
      setModal();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values: ProductReponse) => {
    console.log("values", values);

    method === "post"
      ? axiosCf.post("product", {
          name: values.name,
          describes: values.describes,
          coins: values.coins,
          categoryId: values.categoryId,
          img: values.img,
        })
      : axiosCf.put(`product/${form?.id}`, {
          name: values.name,
          describes: values.describes,
          coins: values.coins,
          categoryId: values.categoryId,
          img: values.img,
        });
  };
  return {
    ...props,
    data,
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
