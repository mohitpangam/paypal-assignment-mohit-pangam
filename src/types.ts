export type ProductTag = '' | 'New' | 'Trending' | 'Vote to Launch'
export type Category = 'all' | 'ps5' | 'xbox' | 'vr' | 'racing-wheel' | 'big-screen' | 'gta-vi'

export type Product = {
  id: number
  name: string
  image: string
  rating: number
  booked_count: number
  tag: ProductTag
  per_day_rent: number
  out_of_stock: boolean
  category?: Category
}

export type RentalDates = { delivery: string; pickup: string }
