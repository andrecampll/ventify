'use client'

import { Input } from '@/components/input'
import { TextArea } from '@/components/textarea'
import { RadioGroup } from '@/components/ui/radio-group'

import { AddArtistGenreInput } from './add-artist-genre-input'

export function AddArtistForm() {
  return (
    <form className="w-full p-4">
      <div>
        <h2 className="text-center font-bold uppercase text-gray-400">
          Artist information
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Artist name" id="name" />
          <Input
            label="Favorite music video (Youtube)"
            id="artistFavoriteMusicVideo"
          />
          <div className="md:h-[105px]">
            <TextArea
              className="md:h-full"
              label="Description"
              id="description"
            />
          </div>
          <div>
            <label className="text-sm">Rating</label>
            <RadioGroup />
            <AddArtistGenreInput value={['rock']} onChange={() => {}} />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-center font-bold uppercase text-gray-400">
          Favorite artist albums
        </h2>
      </div>
    </form>
  )
}
