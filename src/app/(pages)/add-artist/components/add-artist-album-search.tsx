'use client'

import update from 'immutability-helper'
import { Search } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
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

type Props = {
  onChangeAlbums: (albums: (ArtistAlbum | null)[]) => void
  defaultAlbumsValue: (ArtistAlbum | null)[]
}

export function AddArtistAlbumSearch({ onChangeAlbums, ...props }: Props) {
  const emptyContainers: AlbumContainerState[] = useMemo(
    () =>
      Array(6).fill({
        accepts: [ItemTypes.ALBUM],
        lastDroppedAlbum: null,
      }),
    [],
  )

  useEffect(() => {
    if (props.defaultAlbumsValue) {
      const initialContainersWithDefaultAlbums = emptyContainers.map(
        (container, index) => {
          const defaultAlbum = props.defaultAlbumsValue[index]

          if (defaultAlbum) {
            return {
              ...container,
              lastDroppedAlbum: defaultAlbum,
            }
          }

          return container
        },
      )

      const initialDroppedAlbumsIds = props.defaultAlbumsValue
        .filter((album) => album)
        .map((album) => album?.id as string)

      setContainers(initialContainersWithDefaultAlbums)
      setDroppedAlbumsIds(initialDroppedAlbumsIds)
    }
  }, [props.defaultAlbumsValue, emptyContainers])

  const [containers, setContainers] =
    useState<AlbumContainerState[]>(emptyContainers)

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

      const updatedContainerState = update(containers, {
        [index]: {
          lastDroppedAlbum: {
            $set: item,
          },
        },
      })

      setDroppedAlbumsIds((droppedAlbumsIds) =>
        update(droppedAlbumsIds, id ? { $push: [id] } : { $push: [] }),
      )

      setContainers(updatedContainerState)

      const albums = updatedContainerState
        .map((container) => container.lastDroppedAlbum)
        .filter((album) => album)

      onChangeAlbums(albums)

      toast.success('Album added successfully!', {})
    },
    [droppedAlbumsIds, setContainers, onChangeAlbums, containers],
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

        const updatedContainerState = update(containers, {
          [containerIndex]: {
            lastDroppedAlbum: {
              $set: null,
            },
          },
        })

        setContainers(updatedContainerState)

        const albums = updatedContainerState
          .map((container) => container.lastDroppedAlbum)
          .filter((album) => album)

        onChangeAlbums(albums)

        toast.success('Album removed successfully!', {})
      }
    },
    [droppedAlbumsIds, containers, setContainers, onChangeAlbums],
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
