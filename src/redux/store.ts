import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../feature/restaurantDetail/slice/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})
