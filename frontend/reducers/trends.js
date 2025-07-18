import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trends: [],
};

export const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {
    addTrend: (state, action) => {
      const hashtagIndex = state.trends.findIndex((trend) => trend.name === action.payload);

      if (hashtagIndex !== -1) {
        state.trends[hashtagIndex].count = state.trends[hashtagIndex].count + 1;
      } else {
        state.trends.push({
          name: action.payload,
          count: 1,
        });
      }
    },
  },
});

export const { addTrend } = trendsSlice.actions;
export default trendsSlice.reducer;
