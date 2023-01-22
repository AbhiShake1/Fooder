import { createSlice } from "@reduxjs/toolkit"
import { RestaurantCardModel } from "../../home/models"

type RestaurantSliceState = { restaurant?: RestaurantCardModel }

const initialState: RestaurantSliceState = {}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload
    }
  },
})

export const { setRestaurant } = restaurantSlice.actions
export const selectRestaurant = (state: any) => state.restaurant.restaurant

export default restaurantSlice.reducer
