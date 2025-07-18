import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = usersSlice.actions;
export default usersSlice.reducer;
