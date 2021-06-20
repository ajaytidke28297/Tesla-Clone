import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    items: [
      {
        id: "a1",
        title: "Model S",
        description: "Order online for touchless delivery",
        backgroundImg: "model-s.jpg",
        leftBtnText: "Custom order",
        rightBtnText: "Existing inventory",
      },
      {
        id: "a2",
        title: "Model Y",
        description: "Order online for touchless delivery",
        backgroundImg: "model-y.jpg",
        leftBtnText: "Custom order",
        rightBtnText: "Existing inventory",
      },
      {
        id: "a3",
        title: "Model 3",
        description: "Order online for touchless delivery",
        backgroundImg: "model-3.jpg",
        leftBtnText: "Custom order",
        rightBtnText: "Existing inventory",
      },
      {
        id: "a4",
        title: "Model X",
        description: "Order online for touchless delivery",
        backgroundImg: "model-x.jpg",
        leftBtnText: "Custom order",
        rightBtnText: "Existing inventory",
      },
      {
        id: "a5",
        title: "Lowest Cost Solar Panels in America",
        description: "Money-back guarantee",
        backgroundImg: "solar-panel.jpg",
        leftBtnText: "Order now",
        rightBtnText: "Learn more",
      },
      {
        id: "a6",
        title: "Solar for New Roofs",
        description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
        backgroundImg: "solar-roof.jpg",
        leftBtnText: "Order now",
        rightBtnText: "Learn more",
      },
      {
        id: "a7",
        title: "Accessories",
        description: "",
        backgroundImg: "accessories.jpg",
        leftBtnText: "Order now",
      },
    ],
  },
  reducers: {},
});

export const carActions = carSlice.actions;

export default carSlice;
