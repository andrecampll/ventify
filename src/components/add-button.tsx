'use client'

import { Drawer as Vaul } from 'vaul'

import { AddArtistForm } from './add-artist-form'

export function AddButton() {
  return (
    <Vaul.Root shouldScaleBackground>
      <Vaul.Trigger asChild>
        <div className="fixed bottom-0 right-0 mb-4 mr-4 rounded-[50%] shadow-md md:hidden">
          <button
            onClick={() => {}}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-r from-primary to-secondary p-2"
          >
            <span className="text-3xl font-bold text-white">+</span>
          </button>
        </div>
      </Vaul.Trigger>
      <Vaul.Portal>
        <Vaul.Overlay className="fixed inset-0 bg-black/40" />
        <Vaul.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[96%] flex-col rounded-t-[10px] bg-zinc-100">
          <div className="flex-1 rounded-t-[10px] bg-white p-4">
            <div className="mx-auto mb-4 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" />
            <h1 className="mb-2 font-bold text-secondary">Quick add</h1>
            <AddArtistForm />
          </div>
        </Vaul.Content>
      </Vaul.Portal>
    </Vaul.Root>
  )
}
