export type ArtistAlbum = {
  id: string
  artist: string
  name: string
  image: string
}

export type Artist = {
  id: string
  name: string
  rating: number
  favoriteMusicVideo: string
  description?: string | null
  genres?: string[]
  albums?: (ArtistAlbum | null)[]
}

export type ApiArtistAlbum = {
  mbid: string
  artist: string
  name: string
  image: {
    size: string
    '#text': string
  }[]
}

export type ApiResponse = {
  results: {
    albummatches: {
      album: ApiArtistAlbum[]
    }
  }
}
