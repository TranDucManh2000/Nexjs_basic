export type ReceivedProps = Record<string, any>;

export interface arrayFeatureds {
  avatar: string;
  img: string;
  userName: string;
  name: string;
  coin: string;
  dola: string;
  width: number;
  height: number;
  zindex: number;
  margin: number;
}
[];

const dataUser = [1, 2, 3, 4];
const dataFeatured = [
  {
    avatar:
      "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
    img: "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
    userName: "SquitGame",
    name: "Apache",
    coin: "80 ETH",
    dola: "300",
    width: 315,
    height: 350,
    zindex: 0,
    margin: 0,
  },
  {
    avatar:
      "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
    img: "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
    userName: "SquitGame",
    name: "Apache",
    coin: "80 ETH",
    dola: "300",
    width: 358,
    height: 420,
    zindex: 1,
    margin: 30,
  },
  {
    avatar:
      "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
    img: "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
    userName: "SquitGame",
    name: "Apache",
    coin: "80 ETH",
    dola: "300",
    width: 383,
    height: 480,
    zindex: 2,
    margin: 30,
  },
  {
    avatar:
      "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
    img: "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
    userName: "SquitGame",
    name: "Apache",
    coin: "80 ETH",
    dola: "300",
    width: 357,
    height: 420,
    zindex: 1,
    margin: 30,
  },
];

const useTop = (props: ReceivedProps) => {
  return {
    ...props,
    dataUser,
    dataFeatured,
  };
};

export type Props = ReturnType<typeof useTop>;

export default useTop;
