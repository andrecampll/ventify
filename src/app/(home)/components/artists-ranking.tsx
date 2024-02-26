import { Card } from '@/components/card'

type RankingProps = {
  data: {
    name: string
    rating: number
  }[]
}

export function ArtistsRanking({ data }: RankingProps) {
  return (
    <Card
      title="Top 5"
      actionComponent={<span className="text-xs font-bold">Highest rate</span>}
    >
      <main className="p-4">
        <ul className="rounded-lg bg-white-500 p-4">
          {data.map((artist) => (
            <li
              key={artist.name}
              className="flex w-full cursor-pointer items-center justify-between rounded-md border border-white-900  bg-white-900 px-2 font-bold text-secondary hover:border-primary hover:text-primary [&+li]:mt-2"
            >
              <span>{artist.name}</span>
              <span>{artist.rating}</span>
            </li>
          ))}
        </ul>
      </main>
    </Card>
  )
}
