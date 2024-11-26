import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const rootReducer = combineReducers({
  some: appSlice,
});

export default rootReducer;
