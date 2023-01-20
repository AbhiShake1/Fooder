import { createSlice } from "@reduxjs/toolkit"
import { DishModel } from "../../home/models"

type BasketSliceState = { items: DishModel[] }

const initialState: BasketSliceState = { items: [] }

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => { },
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: any) => state?.basket?.items as DishModel[]
export const selectBasketItemsById = (state: any, id: string) => selectBasketItems(state).filter(i => i._id == id)

export default basketSlice.reducer
