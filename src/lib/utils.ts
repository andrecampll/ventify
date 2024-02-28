import { env } from '@/env'

export const getLastFMApiSearchResults = async (searchTerm: string) => {
  const response = await fetch(
    `${env.NEXT_PUBLIC_API_BASE_URL}/?method=album.search&album=${searchTerm}&api_key=${process.env.NEXT_PUBLIC_LAST_FM_API_KEY}&limit=20&format=json`,
  )
  const data = await response.json()
  return data
}
