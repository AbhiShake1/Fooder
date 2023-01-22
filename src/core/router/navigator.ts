import { RestaurantCardModel } from "../../feature/home/models";
import { basketRoute, deliveryRoute, homeRoute, preparingOrderRoute, restaurantDetailRoute } from "./routePath";

export type RootNavigatorParamList = {
  [homeRoute]: undefined
  [restaurantDetailRoute]: RestaurantCardModel
  [basketRoute]: undefined
  [preparingOrderRoute]: undefined
  [deliveryRoute]: undefined
}
