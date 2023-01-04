import { useEffect, useState } from "react";
import { axiosCf } from "../../../../../config/libraries/CfAxios";
export type ReceivedProps = Record<string, any>;

export interface arrayCategory {
  name: string;
  id: number;
}
[];

export interface arrayProducts {
  name: string;
  id: number;
  describes: string;
  coins: number;
  categoryId: number;
  img: number;
  userId: number;
}
[];

const useMarket = (props: ReceivedProps) => {
  const [inMarket, setInMarket] = useState<number>(0);
  const [arrayProduct, setArrayProduct] = useState([]);
  const [listCategory, setListCategory] = useState([
    {
      name: "All",
      id: 0,
    },
  ]);

  const onMarket = (e: number) => {
    setInMarket(e);
  };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { result },
        } = await axiosCf.get("/product");
        setArrayProduct(result);
      } catch (error) {}
    })();
    (async () => {
      try {
        const {
          data: { result },
        } = await axiosCf.get("/category");
        setListCategory(listCategory.concat(result));
      } catch (error) {}
    })();
  }, []);

  return {
    ...props,
    listCategory,
    inMarket,
    onMarket,
    arrayProduct,
  };
};

export type Props = ReturnType<typeof useMarket>;

export default useMarket;
