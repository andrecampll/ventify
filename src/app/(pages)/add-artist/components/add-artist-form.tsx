'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@/components/input'
import { TextArea } from '@/components/textarea'
import { RadioGroup } from '@/components/ui/radio-group'

import { AddArtistAlbumSearch } from './add-artist-album-search'
import { AddArtistGenreInput } from './add-artist-genre-input'

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
})

type AddArtistFormData = z.infer<typeof addArtistFormSchema>

export function AddArtistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<AddArtistFormData>({
    resolver: zodResolver(addArtistFormSchema),
    defaultValues: {
      artistGenres: [],
    },
  })

  // const { addArtist } = useArtists()

  const handleAddArtist = useCallback((data: AddArtistFormData) => {
    console.log('test', data)
  }, [])

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

        <AddArtistAlbumSearch />
      </div>
    </form>
  )
}
