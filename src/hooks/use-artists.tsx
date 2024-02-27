'use client'

import { createContext, useCallback, useContext, useMemo } from 'react'

import { Artist } from '@/data/types/artist'

import useLocalStorage from './use-local-storage'

type ArtistContextType = {
  artists: Artist[]
  artistsRankingByRating: Artist[]
  addArtist: (artist: Artist) => void
  deleteArtist: (artistId: string) => void
}

const ArtistContext = createContext({} as ArtistContextType)

export function ArtistsProvider({ children }: { children: React.ReactNode }) {
  const [artists, setArtists] = useLocalStorage<Artist[]>('artists', [])

  const addArtist = useCallback(
    (artist: Artist) => setArtists((prev) => [...prev, artist]),
    [setArtists],
  )

  const deleteArtist = useCallback(
    (artistId: string) => {
      setArtists((prev) => prev.filter((artist) => artist.id !== artistId))
    },
    [setArtists],
  )

  const artistsRankingByRating = useMemo(() => {
    return artists.sort((a, b) => b.rating - a.rating).slice(0, 5)
  }, [artists])

  return (
    <ArtistContext.Provider
      value={{ artists, addArtist, deleteArtist, artistsRankingByRating }}
    >
      {children}
    </ArtistContext.Provider>
  )
}

export const useArtists = () => useContext(ArtistContext)
