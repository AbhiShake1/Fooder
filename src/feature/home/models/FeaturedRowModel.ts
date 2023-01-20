import { RestaurantCardModel } from "./RestaurantCardModel";

export interface FeaturedRowModel {
  _id: string,
  name: string,
  short_description?: string,
  restaurants?: RestaurantCardModel[],
}
