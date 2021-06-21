import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../store/car-slice";
import navSlice from "../store/nav-slice";

export const store = configureStore({
  reducer: {
    car: carSlice.reducer,
    nav: navSlice.reducer,
  },
});
