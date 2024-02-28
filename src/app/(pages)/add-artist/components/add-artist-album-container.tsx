'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import type { CSSProperties, FC } from 'react'
import { memo } from 'react'
import { useDrop } from 'react-dnd'

import { ArtistAlbum } from '@/data/types/artist'

const style: CSSProperties = {
  color: 'white',
  textAlign: 'center',
  fontSize: '0.75rem',
  width: '123px',
  height: '123px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export interface AlbumContainerProps {
  accept: string[]
  onDrop: (albumId: ArtistAlbum) => void
  onDelete: (albumId: string) => void
  lastDroppedAlbum: ArtistAlbum | null
}

export const AlbumContainer: FC<AlbumContainerProps> = memo(
  function AlbumContainer({ accept, onDrop, lastDroppedAlbum, onDelete }) {
    const [{ isOver, canDrop }, drop] = useDrop({
      accept,
      drop: onDrop,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    })

    const isActive = isOver && canDrop
    let backgroundColor = '#444'
    if (isActive) {
      backgroundColor = '#777'
    } else if (canDrop) {
      backgroundColor = '#000'
    }

    return (
      <div ref={drop} data-testid="album-container">
        {lastDroppedAlbum ? (
          <div className="relative max-h-[123px] max-w-[123px]">
            <Image
              width={123}
              height={123}
              className="h-full w-full"
              src={lastDroppedAlbum.image}
              alt="album name"
            />

            <button
              onClick={() => onDelete(lastDroppedAlbum.id)}
              className="absolute right-1 top-1 cursor-pointer rounded-[50%] bg-primary p-1"
            >
              <X size={16} color="white" />
            </button>

            <div className="absolute bottom-0 flex h-[30%] w-full items-center justify-center bg-black bg-opacity-50">
              <span className="text-center text-xs font-bold text-white">
                {lastDroppedAlbum.name}
              </span>
            </div>
          </div>
        ) : (
          <div style={{ ...style, backgroundColor }}>Release to drop</div>
        )}
      </div>
    )
  },
)
