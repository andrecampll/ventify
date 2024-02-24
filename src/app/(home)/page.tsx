import { Metadata } from 'next'

import { ArtistsTable } from './components/artists-table'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="mt-4">
      <ArtistsTable />
    </div>
  )
}
