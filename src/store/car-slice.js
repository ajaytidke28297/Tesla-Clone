import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: { cars: ["Model S", "Model Y", "Model 3", "Model X"] },
  reducers: {},
});

export const carActions = carSlice.actions;

export default carSlice;
