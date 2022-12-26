import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonCf from "../../../components/button";
import { decrement, increment } from "./counterSlice";
import { count } from "./countSelector";

const Counter = () => {
  const counts = useSelector(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>Redux couter</h1>
        <ButtonCf
          variant="warning"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </ButtonCf>
        <h1 style={{ color: "#fff" }}>{counts}</h1>
        <ButtonCf
          variant="warning"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </ButtonCf>
      </div>
    </div>
  );
};
export default Counter;
