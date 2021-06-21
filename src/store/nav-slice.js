import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    leftItems: [
      "Model S",
      "Model 3",
      "Model X",
      "Model Y",
      "Solar Roof",
      "Solar Panels",
    ],
    rightItems: ["Shop", "Account", "Menu"],
  },
  reducers: {},
});

export const navActions = navSlice.actions;

export default navSlice;
