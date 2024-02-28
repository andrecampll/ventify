'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { v4 } from 'uuid'
import { z } from 'zod'

import { Input } from '@/components/input'
import { TextArea } from '@/components/textarea'
import { RadioGroup } from '@/components/ui/radio-group'
import { useArtists } from '@/hooks/use-artists'

import { AddArtistAlbumSearch } from './add-artist-album-search'
import { AddArtistGenreInput } from './add-artist-genre-input'

const artistAlbumsSchema = z
  .object({
    id: z.string(),
    artist: z.string(),
    name: z.string(),
    image: z.string(),
  })
  .nullable()

const addArtistFormSchema = z.object({
  artistName: z.string().min(3, {
    message: 'Please input a valid artist name!',
  }),
  artistFavoriteMusicVideo: z.string().url({
    message: 'Please input a valid URL!',
  }),
  artistRating: z
    .number({
      invalid_type_error: 'Please select a rating!',
    })
    .min(1, {
      message: 'Please select a rating!',
    }),
  artistDescription: z.string().nullable(),
  artistGenres: z.array(z.string()),
  artistAlbums: z.array(artistAlbumsSchema),
})

type AddArtistFormData = z.infer<typeof addArtistFormSchema>

export function AddArtistForm() {
  const { id } = useParams<{
    id?: string
  }>()

  const { getArtistById, addArtist } = useArtists()

  const initialArtistValue = id ? getArtistById(id) : undefined

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm<AddArtistFormData>({
    resolver: zodResolver(addArtistFormSchema),
    defaultValues: useMemo(() => {
      return {
        artistName: initialArtistValue?.name,
        artistGenres: [],
        artistAlbums: [],
      }
    }, [initialArtistValue]),
  })

  useEffect(() => {
    if (initialArtistValue) {
      reset({
        artistName: initialArtistValue.name,
        artistRating: initialArtistValue.rating,
        artistFavoriteMusicVideo: initialArtistValue.favoriteMusicVideo,
        artistDescription: initialArtistValue.description,
        artistGenres: initialArtistValue.genres,
        artistAlbums: initialArtistValue.albums,
      })
    }
  }, [initialArtistValue, reset])

  const router = useRouter()

  const handleAddArtist = useCallback(
    (data: AddArtistFormData) => {
      const artist = {
        id: initialArtistValue ? initialArtistValue.id : v4(),
        name: data.artistName,
        rating: data.artistRating,
        favoriteMusicVideo: data.artistFavoriteMusicVideo,
        description: data.artistDescription,
        genres: data.artistGenres,
        albums: data.artistAlbums,
      }

      addArtist(artist)

      toast.success('Artist added successfully!', {})

      router.push('/')
    },
    [addArtist, router, initialArtistValue],
  )

  return (
    <form
      id="addArtistForm"
      onSubmit={handleSubmit(handleAddArtist)}
      className="w-full p-4"
    >
      <div>
        <h2 className="text-center font-bold uppercase text-gray-400">
          Artist information
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Input
            label="Artist name"
            error={errors.artistName?.message}
            {...register('artistName')}
          />
          <Input
            label="Favorite music video (Youtube)"
            id="artistFavoriteMusicVideo"
            error={errors.artistFavoriteMusicVideo?.message}
            {...register('artistFavoriteMusicVideo')}
          />
          <div className="md:h-[105px]">
            <TextArea
              className="md:h-full"
              label="Description"
              id="artistDescription"
              error={errors.artistDescription?.message}
              {...register('artistDescription')}
            />
          </div>
          <div>
            <label className="text-sm">Rating</label>
            <RadioGroup
              {...register('artistRating')}
              onChange={(value) => setValue('artistRating', Number(value))}
            />
            <span className="text-xs text-red-400">
              {errors.artistRating?.message}
            </span>
            <AddArtistGenreInput
              value={getValues().artistGenres}
              onChange={(genres) => {
                setValue('artistGenres', genres)
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center font-bold uppercase text-gray-400">
          Favorite artist albums
        </h2>

        <AddArtistAlbumSearch
          onChangeAlbums={(albums) => {
            setValue('artistAlbums', albums)
          }}
          defaultAlbumsValue={getValues().artistAlbums}
        />
      </div>
    </form>
  )
}
