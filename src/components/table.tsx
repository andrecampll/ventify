import { FaTrash, FaYoutube } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'

import { Tooltip } from './ui/tooltip'

type TableProps = {
  data: {
    name: string
    rating: number
  }[]
}

export function Table({ data }: TableProps) {
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
        <tbody className="">
          {data.map((artist) => (
            <tr
              key={artist.name}
              className="group border-b border-gray-200 hover:bg-background hover:text-secondary"
            >
              <td className="p-4">{artist.name}</td>
              <td className="p-4 pl-0">{artist.rating}</td>
              <td className="none p-4 pl-0 ">
                <div className="invisible flex items-center gap-4 group-hover:visible">
                  <Tooltip message="Watch">
                    <FaYoutube size={20} />
                  </Tooltip>
                  <Tooltip message="Edit">
                    <FaPencil size={15} />
                  </Tooltip>
                  <Tooltip message="Delete">
                    <FaTrash size={15} />
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
