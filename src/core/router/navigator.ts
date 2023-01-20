import { RestaurantCardModel } from "../../feature/home/models";
import { homeRoute, restaurantDetailRoute } from "./routePath";

export type RootNavigatorParamList = {
  [homeRoute]: undefined
  [restaurantDetailRoute]: RestaurantCardModel
}
