import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchGpt: false,
  },
  reducers: {
    toggleSearchGptView: (state) => {
      state.searchGpt = !state.searchGpt;
    },
  },
});
export const { toggleSearchGptView } = gptSlice.actions;

export default gptSlice.reducer;
