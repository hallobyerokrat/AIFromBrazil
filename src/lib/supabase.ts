import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(url, key)

export interface Review {
  id: string
  name: string
  role: string | null
  quote: string
  rating: number
  created_at: string
}
