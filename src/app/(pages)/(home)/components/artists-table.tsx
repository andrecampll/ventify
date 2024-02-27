'use client'

import { Search } from 'lucide-react'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Input } from '@/components/input'
import { Table } from '@/components/table'
import { useArtists } from '@/hooks/use-artists'

export function ArtistsTable() {
  const { artists, deleteArtist } = useArtists()

  return (
    <Card
      title="Artists"
      actionComponent={
        <Button className="rounded-md text-xl font-bold">+</Button>
      }
    >
      <main className="pt-4">
        <div className="px-4">
          <Input
            icon={<Search size={20} className="text-gray-400" />}
            id="search"
            label="Search"
          />
        </div>

        <div className="mt-4">
          <Table data={artists} onDeleteRow={deleteArtist} />
        </div>
      </main>
    </Card>
  )
}
