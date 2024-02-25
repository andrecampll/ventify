'use client'

import './tooltip.css'

import * as RadixTooltip from '@radix-ui/react-tooltip'

type TooltipProps = {
  children: React.ReactNode
  message: string
}

export function Tooltip({ children, message }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className="TooltipContent" sideOffset={5}>
            {message}
            <RadixTooltip.Arrow className="TooltipArrow" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
