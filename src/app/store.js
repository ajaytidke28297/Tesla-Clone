import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../store/car-slice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
