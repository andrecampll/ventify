'use client'

import './radio-group.css'

import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { forwardRef } from 'react'

const rates = [
  {
    rating: 1,
  },
  {
    rating: 2,
  },
  {
    rating: 3,
  },
  {
    rating: 4,
  },
  {
    rating: 5,
  },
  {
    rating: 6,
  },
  {
    rating: 7,
  },
  {
    rating: 8,
  },
  {
    rating: 9,
  },
  {
    rating: 10,
  },
]

type RadioGroupProps = {
  name?: string
  value?: string
  onChange?: (value: string) => void
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ onChange, value, name }, ref) => {
    return (
      <RadixRadioGroup.Root
        className="RadioGroupRoot mb-4 mt-1.5 grid w-full gap-2 max-[1050px]:grid-cols-5 min-[1050px]:flex"
        defaultValue="default"
        aria-label="View density"
        orientation="horizontal"
        onValueChange={onChange}
        value={value}
        name={name}
        ref={ref}
      >
        {rates.map((rate) => (
          <div
            className="flex w-full cursor-pointer items-center"
            key={rate.rating}
          >
            <RadixRadioGroup.Item
              className="RadioGroupItem"
              value={rate.rating.toString()}
              id={rate.rating.toString()}
            >
              <RadixRadioGroup.Indicator className="RadioGroupIndicator" />
            </RadixRadioGroup.Item>
            <label className="Label text-xl" htmlFor={rate.rating.toString()}>
              {rate.rating}
            </label>
          </div>
        ))}
      </RadixRadioGroup.Root>
    )
  },
)

RadioGroup.displayName = 'RadioGroup'
