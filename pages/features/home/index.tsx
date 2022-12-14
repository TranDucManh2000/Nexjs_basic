import { Image, Input } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../../config/libraries/CfAxios";
import { RootState } from "../../../redux/store";
import useHome, { ReceivedProps } from "./hook";
import HomeWrapper from "./styled";

const HomeLayout: FC<ReceivedProps> = ({ current, img, setImg }) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const demoAxios = () => {
    request
      .post("category", {
        categoryName: "demoreact2",
      })
      .then(function (response) {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  function imgToBase64(element: any) {
    const file = element.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <HomeWrapper>
      <h1>{current}</h1>
      <h1> count redux = {count}</h1>
    </HomeWrapper>
  );
};

const HomeNft: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHome(props)} />
);

export default HomeNft;
