import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthenState {
  authen: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const initialState: AuthenState = {
  authen: "",
  user: {
    name: "",
    email: "",
    avatar: "",
  },
};

export const authenSlice = createSlice({
  name: "authent",
  initialState,
  reducers: {
    setAuthen: (state, action: PayloadAction<string>) => {
      state.authen = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthen, setUser } = authenSlice.actions;

export default authenSlice.reducer;
