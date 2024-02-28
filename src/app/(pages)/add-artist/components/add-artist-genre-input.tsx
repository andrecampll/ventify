'use client'

import { TagsInput } from 'react-tag-input-component'

type AddArtistGenreInputProps = {
  value: string[]
  onChange: (value: string[]) => void
}

export function AddArtistGenreInput({
  value,
  onChange,
}: AddArtistGenreInputProps) {
  return (
    <div className="mt-2">
      <label className="mb-2 block text-sm">Genre</label>
      <TagsInput
        separators={[',', 'Enter']}
        value={value}
        onChange={onChange}
        name="genres"
        placeHolder="Enter genres"
      />
    </div>
  )
}
