'use client'

import { Button } from './button'
import { Input } from './input'
import { RadioGroup } from './ui/radio-group'

export function AddArtistForm() {
  return (
    <form className="pb-4 min-[1050px]:pb-10">
      <Input label="Artist name" />
      <Input label="Favorite music video (Youtube)" />

      <label className="my-4 block text-sm">Rating</label>
      <RadioGroup />

      <div className="flex justify-end font-bold">
        <Button className="rounded-sm px-3 py-1 text-sm font-normal">
          Add
        </Button>
      </div>
    </form>
  )
}
