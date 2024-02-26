import './radio-group.css'

import * as RadixRadioGroup from '@radix-ui/react-radio-group'

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

export function RadioGroup() {
  return (
    <RadixRadioGroup.Root
      className="RadioGroupRoot mb-4 mt-1.5 grid w-full gap-2 max-[1050px]:grid-cols-5 min-[1050px]:flex"
      defaultValue="default"
      aria-label="View density"
      orientation="horizontal"
    >
      {rates.map((rate) => (
        <div className="flex w-full items-center" key={rate.rating}>
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
}
