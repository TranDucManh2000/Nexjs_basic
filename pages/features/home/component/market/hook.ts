import { useEffect, useState } from "react";
import { axiosCf } from "../../../../../config/libraries/CfAxios";
export type ReceivedProps = Record<string, any>;

export interface arrayCategory {
  name: string;
  method: string;
}
[];

const listCategory = [
  {
    name: "All",
    method: "a",
  },
  {
    name: "Artwork",
    method: "a",
  },
  {
    name: "Virtual Land",
    method: "a",
  },
  {
    name: "RuffyWorld Assets",
    method: "a",
  },
  {
    name: "Physical Artwork",
    method: "a",
  },
];

const useMarket = (props: ReceivedProps) => {
  const [inMarket, setInMarket] = useState<number>(0);
  const [arrayProduct, setArrayProduct] = useState([]);

  const onMarket = (e: number) => {
    setInMarket(e);
  };

  useEffect(() => {
    axiosCf.get("/product").then(function (response: any) {
      response.data.status === 200
        ? setArrayProduct(response.data.result)
        : null;
    });
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
