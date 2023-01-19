export interface FeaturedRowModel {
  id: string,
  title: string,
  description?: string,
  featuredCategory?: 'featured' | 'discounts' | 'offers'
}
