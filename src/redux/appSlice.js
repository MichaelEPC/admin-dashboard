import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    navIsOpen: true,
  },
  reducers: {
    toggleNav: (state) => {
      state.navIsOpen = !state.navIsOpen;
    },
  },
});

export default appSlice.reducer;
