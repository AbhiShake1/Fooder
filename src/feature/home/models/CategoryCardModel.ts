import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface CategoryCardModel {
  _id: string,
  image: SanityImageSource,
  name: string,
}
