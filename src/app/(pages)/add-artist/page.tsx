import { Metadata } from 'next'

import { Button } from '@/components/button'
import { Card } from '@/components/card'

import { AddArtistForm } from './components/add-artist-form'

export const metadata: Metadata = {
  title: 'Add Artist',
}

export default function Home() {
  return (
    <div className="mt-4 w-full">
      <Card
        title="New Artist"
        footerComponent={
          <div className="flex items-center justify-between p-4">
            <Button className="rounded-sm px-3 py-1 text-sm" variation="ghost">
              Cancel
            </Button>

            <Button className="rounded-sm px-3 py-1 text-sm">Save</Button>
          </div>
        }
      >
        <AddArtistForm />
      </Card>
    </div>
  )
}
