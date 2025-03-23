import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice"; // Ensure correct path

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;