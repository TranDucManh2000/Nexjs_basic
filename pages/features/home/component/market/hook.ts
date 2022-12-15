import { useState } from "react";
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

const arrayProduct = [1, 2, 3, 4];

const useMarket = (props: ReceivedProps) => {
  const [inMarket, setInMarket] = useState<number>(0);

  const onMarket = (e: number) => {
    setInMarket(e);
  };
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
