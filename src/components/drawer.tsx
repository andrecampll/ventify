import { Drawer as Vaul } from 'vaul'

export function Drawer() {
  return (
    <Vaul.Root>
      <Vaul.Trigger>Open</Vaul.Trigger>
      <Vaul.Portal>
        <Vaul.Content>
          <p>Content</p>
        </Vaul.Content>
        <Vaul.Overlay />
      </Vaul.Portal>
    </Vaul.Root>
  )
}
