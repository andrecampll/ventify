export type Artist = {
  id: string
  name: string
  rating: number
  favoriteMusicVideo: string
}

export type ArtistAlbum = {
  id: string
  artist: string
  name: string
  image: string
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
