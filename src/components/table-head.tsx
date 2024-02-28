import { SortAsc } from 'lucide-react'

const columns = [
  { label: 'Name', accessor: 'name', sortable: true },
  { label: 'Rating', accessor: 'rating', sortable: true },
  { label: 'Actions', accessor: 'actions', sortable: false },
]

export function TableHead() {
  const handleSortingChange = (accessor: string) => {
    console.log(accessor)
  }

  return columns.map(({ label, accessor, sortable }) => {
    return (
      <th className="p-4 text-left text-gray-600" key={accessor}>
        <div className="flex w-full items-center justify-between">
          <span>{label}</span>

          {sortable && (
            <button
              className="cursor-pointer"
              onClick={
                sortable ? () => handleSortingChange(accessor) : () => {}
              }
            >
              <span className="sr-only">Sort by {label}</span>
              <SortAsc size={15} />
            </button>
          )}
        </div>
      </th>
    )
  })
}
