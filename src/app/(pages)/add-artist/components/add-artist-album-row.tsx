'use client'

import Image from 'next/image'
import type { CSSProperties, FC } from 'react'
import { memo } from 'react'
import { useDrag } from 'react-dnd'

import { ArtistAlbum } from '@/data/types/artist'

type ArtistAlbumRowProps = ArtistAlbum & {
  type: string
  isDropped: boolean
}

const style: CSSProperties = {
  float: 'left',
  width: '100%',
}

export const AlbumRow: FC<ArtistAlbumRowProps> = memo(function AlbumRow({
  id,
  name,
  type,
  image,
  artist,
  isDropped,
}) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { id, name, type, image, artist },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [id, name, type, image, artist, type],
  )

  return (
    <li
      ref={isDropped ? null : drag}
      style={{
        ...style,
        opacity: isDropped ? 0.5 : opacity,
        cursor: isDropped ? 'not-allowed' : 'move',
      }}
      data-testid="album"
      className={`group flex items-center gap-4 rounded-sm border-2 border-dashed border-gray-400 bg-background p-2 transition-colors hover:border-primary [&+li]:mt-2`}
    >
      {image ? (
        <Image
          width={96}
          height={96}
          className="max-w-24"
          src={image}
          alt="Album cover"
        />
      ) : (
        <img
          className="w-24"
          src="https://via.placeholder.com/150"
          alt="album placeholder"
        />
      )}

      <div className="flex flex-col gap-2">
        <span className="text-sm">
          Artist name:{' '}
          <strong className="group-hover:text-primary">{artist}</strong>
        </span>
        <span className="text-sm">
          Album: <strong className="group-hover:text-primary">{name}</strong>
        </span>
      </div>
    </li>
  )
})
