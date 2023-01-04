export type ReceivedProps = Record<string, any>;

const dataSlider = [
  {
    url: "https://img.freepik.com/premium-photo/nft-word-abstract-background-3d-rendering_34478-767.jpg?w=2000",
  },
  {
    url: "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds_181624-11068.jpg?w=1060&t=st=1672802666~exp=1672803266~hmac=3e15b703d802b13e91637bf89ad00ea8438354d1b622549aaa5d0fe5190c73dd",
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416__480.png",
  },
];

const useSlider = (props: ReceivedProps) => {
  return {
    ...props,
    dataSlider,
  };
};

export type Props = ReturnType<typeof useSlider>;

export default useSlider;
