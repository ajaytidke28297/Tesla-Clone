import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [
      {
        id: "ModelS",
        title: "Model S",
        description: "Plaid",
        backgroundImg: "model-s.jpg",
        engineDetail: [
          {
            value: "390mi",
            label: "Range (est.)",
          },
          {
            value: "1.99s",
            label: "0-60 mph*",
          },
          {
            value: "200mph",
            label: "Top Speed",
          },
          {
            value: "1020hp",
            label: "Peak Power",
          },
        ],
      },
      {
        id: "Model3",
        title: "Model 3",
        description: "",
        backgroundImg: "model-3-1.jpg",
        engineDetail: [
          {
            value: "3.1s",
            label: "0-60 mph*",
          },
          {
            value: "353mi",
            label: "Range (est.)",
          },
          {
            value: "AWD",
            label: "Dual Motor",
          },
        ],
      },
      {
        id: "ModelX",
        title: "Model X",
        description: "Plaid",
        backgroundImg: "model-x-1.jpg",
        engineDetail: [
          {
            value: "340mi",
            label: "Range (est.)",
          },
          {
            value: "2.5s",
            label: "0-60 mph*",
          },
          {
            value: "9.9s",
            label: "1/4 Mile",
          },
          {
            value: "1020hp",
            label: "Peak Power",
          },
        ],
      },
      {
        id: "ModelY",
        title: "Model Y",
        description: "",
        backgroundImg: "model-y-1.jpg",
        engineDetail: [
          {
            value: "68cu ft",
            label: "Cargo Space",
          },
          {
            value: "326mi",
            label: "Range (est.)",
          },
          {
            value: "AWD",
            label: "Dual Motor",
          },
        ],
      },
    ],
  },
  reducers: {},
});

export const productActions = productSlice.actions;

export default productSlice;
