import { Pencil, Trash, Youtube } from 'lucide-react'
import Link from 'next/link'

import { Artist } from '@/data/types/artist'

import { Tooltip } from './ui/tooltip'

type TableProps = {
  data: Artist[]
  onDeleteRow: (id: string) => void
}

export function Table({ data, onDeleteRow }: TableProps) {
  return (
    <div className="h-[500px] overflow-y-auto">
      <table className="w-full">
        <thead className="border-b border-gray-200">
          <tr>
            <th className="p-4 text-left text-gray-600">Name</th>
            <th className="p-4 pl-0 text-left text-gray-600">Rating</th>
            <th className="p-4 pl-0 text-left text-gray-600">Actions</th>
          </tr>
        </thead>

        {data.length === 0 ? (
          <tbody>
            <tr>
              <td className="p-4 text-center" colSpan={3}>
                No artists found
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {data.map((artist) => (
              <tr
                key={artist.id}
                className="group border-b border-gray-200 hover:bg-background hover:text-secondary"
              >
                <td className="p-4">{artist.name}</td>
                <td className="p-4 pl-0">{artist.rating}</td>
                <td className="none p-4 pl-0 ">
                  <div className="invisible flex items-center gap-4 group-hover:visible">
                    <Tooltip message="Watch">
                      <a
                        href={artist.favoriteMusicVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube size={15} />
                      </a>
                    </Tooltip>
                    <Tooltip message="Edit">
                      <Link href={`/add-artist/${artist.id}`}>
                        <Pencil size={15} />
                      </Link>
                    </Tooltip>
                    <Tooltip message="Delete">
                      <button
                        className="cursor-pointer"
                        onClick={() => onDeleteRow(artist.id)}
                      >
                        <Trash size={15} />
                      </button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}
