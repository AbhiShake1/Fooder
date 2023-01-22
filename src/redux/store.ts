import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../feature/restaurantDetail/slice/basketSlice";
import restaurantReducer from "../feature/restaurantDetail/slice/restaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  }
})
