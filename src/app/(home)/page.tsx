import { Metadata } from 'next'

import { AddButton } from '@/components/add-button'

import { ArtistsQuickAdd } from './components/artists-quick-add'
import { ArtistsRanking } from './components/artists-ranking'
import { ArtistsTable } from './components/artists-table'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="my-4 grid gap-5 md:grid-cols-10 md:grid-rows-5">
      <div className="md:col-span-5 md:row-span-5">
        <ArtistsTable />
      </div>
      <div className="md:col-span-5 md:row-span-2">
        <ArtistsRanking />
      </div>

      <div className="max-md:hidden md:col-span-5 md:row-span-3">
        <ArtistsQuickAdd />
      </div>

      <AddButton />
    </div>
  )
}
