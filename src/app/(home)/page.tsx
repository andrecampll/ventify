import { Metadata } from 'next'

import { AddButton } from '@/components/add-button'

import { ArtistsRanking } from './components/artists-ranking'
import { ArtistsTable } from './components/artists-table'

export const metadata: Metadata = {
  title: 'Home',
}

const artistsRanking = [
  {
    name: 'Queen',
    rating: 10,
  },
  {
    name: 'The Beatles',
    rating: 9,
  },
  {
    name: 'Led Zeppelin',
    rating: 8,
  },
  {
    name: 'Pink Floyd',
    rating: 7,
  },
  {
    name: 'The Rolling Stones',
    rating: 6,
  },
]

const artistsData = [
  {
    name: 'John Doe',
    rating: 8,
  },
  {
    name: 'Jane Doe',
    rating: 8,
  },
  {
    name: 'John Smith',
    rating: 7,
  },
  {
    name: 'Jane Smith',
    rating: 7,
  },
  {
    name: 'John Johnson',
    rating: 6,
  },
  {
    name: 'Jane Johnson',
    rating: 6,
  },
  {
    name: 'John Jackson',
    rating: 5,
  },
  {
    name: 'Jane Jackson',
    rating: 5,
  },
  {
    name: 'John James',
    rating: 4,
  },
  {
    name: 'Jane James',
    rating: 4,
  },
]

export default function Home() {
  return (
    <div className="my-4 grid gap-5 lg:grid-cols-9 lg:grid-rows-6">
      <div className="lg:col-span-6 lg:row-span-6">
        <ArtistsTable data={artistsData} />
      </div>
      <div className="lg:col-span-3 lg:row-span-3">
        <ArtistsRanking data={artistsRanking} />
      </div>

      <div className="lg:col-span-3 lg:row-span-3">test</div>

      <AddButton />
    </div>
  )
}
