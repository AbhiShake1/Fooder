import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface DishModel {
  _id: string,
  name: string,
  description: string,
  price: string,
  image: SanityImageSource,
}
