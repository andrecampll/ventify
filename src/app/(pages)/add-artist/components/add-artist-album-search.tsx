'use client'

import update from 'immutability-helper'
import { Search } from 'lucide-react'
import { useCallback, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { v4 } from 'uuid'

import { Input } from '@/components/input'
import { ArtistAlbum } from '@/data/types/artist'

import { AlbumContainer } from './add-artist-album-container'
import { AlbumRow } from './add-artist-album-row'

type AlbumContainerState = {
  accepts: string[]
  lastDroppedAlbum: ArtistAlbum | null
}

type AlbumState = ArtistAlbum & {
  type: string
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

  const [albums] = useState<AlbumState[]>([
    {
      id: v4(),
      artist: 'Pink Floyd',
      name: 'The Dark Side of the Moon',
      image: 'https://via.placeholder.com/150',
      type: ItemTypes.ALBUM,
    },
    {
      id: v4(),
      artist: 'Pink Floyd',
      name: 'The Wall',
      image: 'https://via.placeholder.com/150',
      type: ItemTypes.ALBUM,
    },
    {
      id: v4(),
      artist: 'Pink Floyd',
      name: 'Wish You Were Here',
      image: 'https://via.placeholder.com/150',
      type: ItemTypes.ALBUM,
    },
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

      setDroppedAlbumsIds(
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
    },
    [droppedAlbumsIds, containers, setContainers],
  )

  return (
    <div className="mt-4 flex w-full flex-col gap-4 md:flex-row-reverse md:items-center">
      <DndProvider backend={HTML5Backend}>
        <div className="w-full">
          <Input
            icon={<Search size={20} className="text-gray-400" />}
            id="search"
            label="Search albums"
          />

          <div className="mt-2">
            <ul style={{ overflow: 'hidden', clear: 'both' }}>
              {albums.map((album) => (
                <AlbumRow
                  key={album.id}
                  id={album.id}
                  isDropped={isDropped(album.id)}
                  type={album.type}
                  artist={album.artist}
                  name={album.name}
                  image={album.image}
                />
              ))}
            </ul>
          </div>
        </div>

        <div
          className="grid h-[430px] w-full grid-cols-3 grid-rows-2 items-center justify-items-center gap-4 bg-gray-300 p-4"
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
