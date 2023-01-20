import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { DishModel } from "./DishModel";

export interface RestaurantCardModel {
  _id: string,
  image: SanityImageSource,
  name: string,
  rating: number,
  genre: string,
  address: string,
  short_description?: string,
  dishes?: DishModel[],
  lng?: number,
  lat?: number,
}

