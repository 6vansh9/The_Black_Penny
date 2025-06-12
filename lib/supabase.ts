import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://xsaecrrqjokviynpuvwp.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzYWVjcnJxam9rdml5bnB1dndwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MzAxNjIsImV4cCI6MjA2NTIwNjE2Mn0.dSBMMaVe-PgoINQzmcXKrSDt08cZDG5IVf0KiaXUGlk"

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for our database tables
export type MenuItem = {
  id?: number
  name: string
  description: string
  price: number
  image_url: string
}

export type Reservation = {
  id?: number
  name: string
  email: string
  phone: string
  date: string
  time: string
  people: number
}

export type GalleryItem = {
  id?: number
  image_url: string
  caption: string
}
