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
    logout: (state, action) => {
      state.user = {};
    }
  },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
