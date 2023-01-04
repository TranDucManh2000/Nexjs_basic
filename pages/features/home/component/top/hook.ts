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
      "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/283340299_1063601274365849_4795855512102228157_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=10aySNwCBeYAX-d1hya&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAsBWt4zjgXDHe7vmBZD2DDnlGgeEUzw9EqTctnddeYfQ&oe=63B9AF6B",
    img: "https://images.unsplash.com/photo-1656381620321-bddff61435c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmZ0JTIwYXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    userName: "TranManh",
    name: "NFT universe",
    coin: "80 ETH",
    dola: "300",
    width: 315,
    height: 350,
    zindex: 0,
    margin: 0,
  },
  {
    avatar:
      "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/283340299_1063601274365849_4795855512102228157_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=10aySNwCBeYAX-d1hya&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAsBWt4zjgXDHe7vmBZD2DDnlGgeEUzw9EqTctnddeYfQ&oe=63B9AF6B",
    img: "https://wallpapercave.com/uwp/uwp1991199.jpeg",
    userName: "TranManh",
    name: "NFT universe",
    coin: "80 ETH",
    dola: "300",
    width: 358,
    height: 420,
    zindex: 1,
    margin: 30,
  },
  {
    avatar:
      "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/283340299_1063601274365849_4795855512102228157_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=10aySNwCBeYAX-d1hya&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAsBWt4zjgXDHe7vmBZD2DDnlGgeEUzw9EqTctnddeYfQ&oe=63B9AF6B",
    img: "https://pbs.twimg.com/media/Fe9pq8nXEAIekc8.jpg",
    userName: "TranManh",
    name: "NFT universe",
    coin: "80 ETH",
    dola: "300",
    width: 383,
    height: 480,
    zindex: 2,
    margin: 30,
  },
  {
    avatar:
      "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/283340299_1063601274365849_4795855512102228157_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=10aySNwCBeYAX-d1hya&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAsBWt4zjgXDHe7vmBZD2DDnlGgeEUzw9EqTctnddeYfQ&oe=63B9AF6B",
    img: "https://media.istockphoto.com/id/1152464442/photo/i-offer-you-the-stars.jpg?b=1&s=170667a&w=0&k=20&c=UL9VkLml0Tnbe6w9l_VooS107nYqX3kLTXAVEQzFH-M=",
    userName: "TranManh",
    name: "NFT universe",
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
