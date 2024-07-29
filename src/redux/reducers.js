import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "./appSlice"; // Importa tu slice

const rootReducer = combineReducers({
  some: appSlice,
  // Añade otros reducers aquí
});

export default rootReducer;
