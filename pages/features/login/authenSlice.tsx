import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthenState {
  authen: string;
}

const initialState: AuthenState = {
  authen: "",
};

export const authenSlice = createSlice({
  name: "authent",
  initialState,
  reducers: {
    setAuthen: (state, action: PayloadAction<string>) => {
      state.authen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthen } = authenSlice.actions;

export default authenSlice.reducer;
