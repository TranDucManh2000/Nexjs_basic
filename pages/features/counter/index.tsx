import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonCf from "../../../components/button";
import { RootState } from "../../../redux/store";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
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
        <span>{count}</span>
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
