import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    navMob: true,
  },
  reducers: {
    toggleNav: (state) => {
      state.navMob = !state.navMob;
    },
  },
});

export default appSlice.reducer;
