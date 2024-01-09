import { configure } from "@testing-library/react";
import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
