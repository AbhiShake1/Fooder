export interface RestaurantCardModel {
  id: number,
  imageUrl: string,
  title: string,
  rating: number,
  genre: string,
  address: string,
  short_description?: string,
  dishes: string[],
  lng: number,
  lat: number,
}
