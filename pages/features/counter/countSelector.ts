import { RootState } from "./../../../redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const counterSlector = (state: RootState) => state.counter;

export const count = createSelector(counterSlector, (counter) => counter.value);
