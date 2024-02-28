'use client'

import { Card } from '@/components/card'
import { useArtists } from '@/hooks/use-artists'

export function ArtistsRanking() {
  const { artistsRankingByRating } = useArtists()

  return (
    <Card
      title="Top 5"
      headerComponent={<span className="text-xs font-bold">Highest rate</span>}
    >
      <main className="p-4">
        <ul className="rounded-lg bg-white-500 p-4">
          {artistsRankingByRating.length === 0 ? (
            <li className="flex justify-center rounded-md border border-white-900  bg-white-900 p-4 font-bold text-secondary">
              <span>No artists yet</span>
            </li>
          ) : (
            artistsRankingByRating.map((artist) => (
              <li
                key={artist.id}
                className="flex w-full cursor-pointer items-center justify-between rounded-md border border-white-900  bg-white-900 px-2 font-bold text-secondary hover:border-primary hover:text-primary [&+li]:mt-2"
              >
                <span>{artist.name}</span>
                <span>{artist.rating}</span>
              </li>
            ))
          )}
        </ul>
      </main>
    </Card>
  )
}
