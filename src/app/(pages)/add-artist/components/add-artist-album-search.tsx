'use client'

import update from 'immutability-helper'
import { Search } from 'lucide-react'
import { useCallback, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { toast } from 'sonner'

import { Input } from '@/components/input'
import { ArtistAlbum } from '@/data/types/artist'
import { useDebounce } from '@/hooks/use-debouce'

import { AlbumContainer } from './add-artist-album-container'
import { AlbumList } from './add-artist-album-list'

type AlbumContainerState = {
  accepts: string[]
  lastDroppedAlbum: ArtistAlbum | null
}

export const ItemTypes = {
  ALBUM: 'album',
}

export function AddArtistAlbumSearch() {
  const [containers, setContainers] = useState<AlbumContainerState[]>([
    { accepts: [ItemTypes.ALBUM], lastDroppedAlbum: null },
    { accepts: [ItemTypes.ALBUM], lastDroppedAlbum: null },
    { accepts: [ItemTypes.ALBUM], lastDroppedAlbum: null },
    { accepts: [ItemTypes.ALBUM], lastDroppedAlbum: null },
    { accepts: [ItemTypes.ALBUM], lastDroppedAlbum: null },
    { accepts: [ItemTypes.ALBUM], lastDroppedAlbum: null },
  ])

  const [droppedAlbumsIds, setDroppedAlbumsIds] = useState<string[]>([])

  function isDropped(albumId: string) {
    return droppedAlbumsIds.indexOf(albumId) > -1
  }

  const handleDrop = useCallback(
    (index: number, item: ArtistAlbum) => {
      const { id } = item
      const albumAlreadyDropped = droppedAlbumsIds.indexOf(id) > -1

      if (albumAlreadyDropped) {
        return
      }

      setDroppedAlbumsIds((droppedAlbumsIds) =>
        update(droppedAlbumsIds, id ? { $push: [id] } : { $push: [] }),
      )
      setContainers((containers) =>
        update(containers, {
          [index]: {
            lastDroppedAlbum: {
              $set: item,
            },
          },
        }),
      )

      toast.success('Album added successfully!', {})
    },
    [droppedAlbumsIds],
  )

  const handleDelete = useCallback(
    (albumId: string) => {
      const albumIndex = droppedAlbumsIds.indexOf(albumId)

      if (albumIndex > -1) {
        const albumId = droppedAlbumsIds[albumIndex]

        setDroppedAlbumsIds(
          update(droppedAlbumsIds, { $splice: [[albumIndex, 1]] }),
        )

        const containerIndex = containers.findIndex(
          (container) => container.lastDroppedAlbum?.id === albumId,
        )

        setContainers((containers) =>
          update(containers, {
            [containerIndex]: {
              lastDroppedAlbum: {
                $set: null,
              },
            },
          }),
        )
      }

      toast.success('Album removed successfully!', {})
    },
    [droppedAlbumsIds, containers, setContainers],
  )

  const [search, setSearch] = useState('')

  const deboucedSearchValue = useDebounce(search, 1000)

  const handleSearch = useCallback(
    (search: string) => {
      setSearch(search)
    },
    [setSearch],
  )

  return (
    <div className="mt-4 flex w-full flex-col gap-4 md:flex-row-reverse">
      <DndProvider backend={HTML5Backend}>
        <div className="w-full">
          <Input
            icon={<Search size={20} className="text-gray-400" />}
            id="search"
            label="Search albums"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <AlbumList searchTerm={deboucedSearchValue} isDropped={isDropped} />
        </div>

        <div
          className="grid h-[430px] w-full grid-cols-3 grid-rows-2 items-center justify-items-center gap-4 bg-gray-300"
          style={{ overflow: 'hidden', clear: 'both' }}
        >
          {containers.map(({ accepts, lastDroppedAlbum }, index) => (
            <AlbumContainer
              key={index}
              onDelete={handleDelete}
              accept={accepts}
              lastDroppedAlbum={lastDroppedAlbum}
              onDrop={(item) => handleDrop(index, item)}
            />
          ))}
        </div>
      </DndProvider>
    </div>
  )
}
