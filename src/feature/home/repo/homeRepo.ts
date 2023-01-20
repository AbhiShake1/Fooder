import sanityClient from '../../../core/backendClient/sanityClient'
import { CategoryCardModel, FeaturedRowModel } from '../models'

export async function getFeaturedCategories(): Promise<FeaturedRowModel[]> {
  const response: FeaturedRowModel[] = await sanityClient.fetch(`
*[_type == 'featured'] {
  ...,
  restaurants[]->{
    ...,
    dishes[]->
  }
}
`)
  return response as FeaturedRowModel[]
}

export function getAllCategories(): Promise<CategoryCardModel[]> {
  return sanityClient.fetch(`
*[_type == 'category']
`)
}

