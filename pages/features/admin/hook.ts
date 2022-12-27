import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { axiosCf } from "../../../config/libraries/CfAxios";
export type ReceivedProps = Record<string, any>;

export interface ProductReponse {
  key: React.Key;
  id: number;
  name: string;
  describes: string;
  coins: string;
  categoryId: number;
  img: string;
}

const useAdmin = (props: ReceivedProps) => {
  const [columns, setColumns] = useState<ColumnsType<ProductReponse>>([]);
  const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosCf.get("product/colum");
        setColumns(
          Object.values(data).map(({ COLUMN_NAME }: any, index: number) => ({
            title: COLUMN_NAME,
            dataIndex: COLUMN_NAME,
            key: index,
          }))
        );
      } catch (error) {}
    })();
    (async () => {
      try {
        await axiosCf.get("product").then((reponse) =>
          setData(
            Object.values(reponse.data.result).map(
              (item: any, index: number) => ({
                ...item,
                key: index,
              })
            )
          )
        );
      } catch (error) {}
    })();
  }, []);

  const onChange = (key: string) => {
    console.log(key);
  };

  const onAction = (event: any) => {
    console.log("event", event);
  };

  return {
    ...props,
    data,
    onChange,
    columns,
    onAction,
  };
};

export type Props = ReturnType<typeof useAdmin>;

export default useAdmin;
