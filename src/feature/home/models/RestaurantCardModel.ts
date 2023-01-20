import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface RestaurantCardModel {
  _id: number,
  image: SanityImageSource,
  title: string,
  rating: number,
  genre: string,
  address: string,
  short_description?: string,
  dishes: string[],
  lng?: number,
  lat?: number,
}

