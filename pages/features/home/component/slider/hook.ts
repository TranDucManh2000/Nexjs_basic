export type ReceivedProps = Record<string, any>;

const dataSlider = [
  {
    url: "https://loobr.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdq3jqnrem%2Fimage%2Fupload%2Fv1666864873%2Fa867fn9uhfhsndpczuv6.jpg&w=1920&q=20",
  },
  {
    url: "https://thehub-io.imgix.net/files/s3/20210629175130-a77c31cc24b79e09aa4cff35436a6414.png?w=1600&h=900",
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
