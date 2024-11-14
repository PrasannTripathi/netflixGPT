import { createSlice } from "@reduxjs/toolkit";

const configslice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },

  reducers: {
    addLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addLanguage } = configslice.actions;

export default configslice.reducer;
