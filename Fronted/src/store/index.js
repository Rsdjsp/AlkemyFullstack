import { configureStore } from "@reduxjs/toolkit";
import operationReducer from "../features/operSlice";

const store = configureStore({
  reducer: {
    operations: operationReducer,
  },
});

export default store;
