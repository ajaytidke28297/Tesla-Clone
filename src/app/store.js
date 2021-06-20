import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../store/car-slice";

export const store = configureStore({
  reducer: {
    car: carSlice.reducer,
  },
});
