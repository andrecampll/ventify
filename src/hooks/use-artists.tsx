'use client'

import { createContext, useCallback, useContext, useMemo } from 'react'

import { Artist } from '@/data/types/artist'

import useLocalStorage from './use-local-storage'

type ArtistContextType = {
  artists: Artist[]
  artistsRankingByRating: Artist[]
  addArtist: (artist: Artist) => void
  deleteArtist: (artistId: string) => void
  getArtistById: (id: string) => Artist | undefined
}

const ArtistContext = createContext({} as ArtistContextType)

export function ArtistsProvider({ children }: { children: React.ReactNode }) {
  const [artists, setArtists] = useLocalStorage<Artist[]>('artists', [])

  const addArtist = useCallback(
    // find if artist already exists and update it or add a new one
    (artist: Artist) => {
      setArtists((prev) => {
        const artistIndex = prev.findIndex((a) => a.id === artist.id)

        if (artistIndex !== -1) {
          return [
            ...prev.slice(0, artistIndex),
            artist,
            ...prev.slice(artistIndex + 1),
          ]
        }

        return [...prev, artist]
      })
    },
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

  const getArtistById = useCallback(
    (id: string) => artists.find((artist) => artist.id === id),
    [artists],
  )

  return (
    <ArtistContext.Provider
      value={{
        artists,
        addArtist,
        deleteArtist,
        artistsRankingByRating,
        getArtistById,
      }}
    >
      {children}
    </ArtistContext.Provider>
  )
}

export const useArtists = () => useContext(ArtistContext)
