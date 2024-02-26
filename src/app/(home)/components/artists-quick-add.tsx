import { AddArtistForm } from '@/components/add-artist-form'
import { Card } from '@/components/card'

// type ArtistsQuickAddProps = {}

export function ArtistsQuickAdd() {
  return (
    <Card title="Quick add">
      <main className="p-4">
        <AddArtistForm />
      </main>
    </Card>
  )
}
