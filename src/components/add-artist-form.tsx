'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { v4 } from 'uuid'
import { z } from 'zod'

import { Artist } from '@/data/types/artist'
import { useArtists } from '@/hooks/use-artists'

import { Button } from './button'
import { Input } from './input'
import { RadioGroup } from './ui/radio-group'

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
})

type AddArtistFormData = z.infer<typeof addArtistFormSchema>

export function AddArtistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<AddArtistFormData>({
    resolver: zodResolver(addArtistFormSchema),
  })

  const { addArtist } = useArtists()

  const handleAddArtist = useCallback(
    (data: AddArtistFormData) => {
      const artist: Artist = {
        id: v4(),
        name: data.artistName,
        rating: data.artistRating,
        favoriteMusicVideo: data.artistFavoriteMusicVideo,
        albums: [],
        genres: [],
        description: null,
      }

      addArtist(artist)
      toast.success('Artist added successfully!', {})
    },
    [addArtist],
  )

  return (
    <form
      onSubmit={handleSubmit(handleAddArtist)}
      className="pb-4 min-[1050px]:pb-10 [&>div]:mt-2"
    >
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

      <label className="my-4 block text-sm">Rating</label>
      <RadioGroup
        {...register('artistRating')}
        onChange={(value) => setValue('artistRating', Number(value))}
      />
      <span className="text-xs text-red-400">
        {errors.artistRating?.message}
      </span>

      <div className="flex justify-end font-bold">
        <Button
          disabled={isSubmitting}
          type="submit"
          className="rounded-sm px-3 py-1 text-sm font-normal"
        >
          Add
        </Button>
      </div>
    </form>
  )
}
