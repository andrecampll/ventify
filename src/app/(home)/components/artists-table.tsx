import { Search } from 'lucide-react'

import { Input } from '@/components/input'

export function ArtistsTable() {
  return (
    <div className="rounded-md bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-1">
        <h1 className="text-secondary font-bold">My artists</h1>
        <button className="from-primary to-secondary flex h-[28px] w-[28px] items-center justify-center rounded-md bg-gradient-to-r text-center">
          <span className="text-xl font-bold text-white">+</span>
        </button>
      </div>

      <main className="border-t-2 p-4">
        <div>
          <label htmlFor="search">Search</label>
          <Input
            icon={<Search size={20} className="text-gray-400" />}
            className="mt-1"
            id="search"
          />
        </div>
      </main>
    </div>
  )
}
