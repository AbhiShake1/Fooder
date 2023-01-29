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
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(i => i._id == action.payload.items._id)

      if (index < 0) return;

      const newBasket = [...state.items]
      newBasket.splice(index, 1)

      state.items = newBasket
    },
  }
})

type removeItemType = { items: DishModel }

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: any) => state?.basket?.items as DishModel[]
export const selectBasketItemsById = (state: any, id: string) => selectBasketItems(state).filter(i => i._id == id)

export const selectBasketTotal = (state: any) => selectBasketItems(state).reduce((total, item) => total += parseFloat(item.price), 0)

export default basketSlice.reducer
