import { Search } from 'lucide-react'

import { Input } from '@/components/input'
import { Table } from '@/components/table'

export function ArtistsTable() {
  return (
    <div className="rounded-md bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-1">
        <h1 className="font-bold text-secondary">My artists</h1>
        <button className="flex h-[28px] w-[28px] items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary text-center">
          <span className="text-xl font-bold text-white">+</span>
        </button>
      </div>

      <main className="border-t-2 pt-4">
        <div className="px-4">
          <label htmlFor="search">Search</label>
          <Input
            icon={<Search size={20} className="text-gray-400" />}
            className="mt-1"
            id="search"
          />
        </div>

        <div className="mt-4">
          <Table />
        </div>
      </main>
    </div>
  )
}
