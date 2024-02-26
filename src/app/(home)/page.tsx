import { Metadata } from 'next'

import { AddButton } from '@/components/add-button'

import { ArtistsQuickAdd } from './components/artists-quick-add'
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
    <div className="my-4 grid gap-5 md:grid-cols-10 md:grid-rows-5">
      <div className="md:col-span-5 md:row-span-5">
        <ArtistsTable data={artistsData} />
      </div>
      <div className="md:col-span-5 md:row-span-2">
        <ArtistsRanking data={artistsRanking} />
      </div>

      <div className="max-md:hidden md:col-span-5 md:row-span-3">
        <ArtistsQuickAdd />
      </div>

      <AddButton />
    </div>
  )
}
