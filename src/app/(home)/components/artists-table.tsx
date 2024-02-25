'use client'

import { Search } from 'lucide-react'

import { Card } from '@/components/card'
import { Input } from '@/components/input'
import { Table } from '@/components/table'

type ArtistsTableProps = {
  data: {
    name: string
    rating: number
  }[]
}

export function ArtistsTable({ data }: ArtistsTableProps) {
  return (
    <Card
      title="Artists"
      actionComponent={
        <button
          onClick={() => console.log('Add artist')}
          className="flex h-[28px] w-[28px] items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary text-center"
        >
          <span className="text-xl font-bold text-white">+</span>
        </button>
      }
    >
      <main className=" pt-4">
        <div className="px-4">
          <label htmlFor="search">Search</label>
          <Input
            icon={<Search size={20} className="text-gray-400" />}
            className="mt-1"
            id="search"
          />
        </div>

        <div className="mt-4">
          <Table data={data} />
        </div>
      </main>
    </Card>
  )
}
