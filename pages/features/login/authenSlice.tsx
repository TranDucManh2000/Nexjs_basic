import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: {
    id: number;
    accessToken: string;
    name: string;
    email: string;
    avatar: string;
  };
}

const initialState: UserState = {
  user: {
    id: 0,
    accessToken: "",
    name: "",
    email: "",
    avatar: "",
  },
};

export const authenSlice = createSlice({
  name: "authent",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authenSlice.actions;

export default authenSlice.reducer;
