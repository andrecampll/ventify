import Image from 'next/image'

export function Header() {
  return (
    <header className="from-primary to-secondary bg-gradient-to-r px-4 py-1 md:px-12">
      <div className="m-auto flex max-w-5xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Image alt="logo" width={30} height={30} src="/logo.png" />
          <span className="font-bold text-white">Music Management Tool</span>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-white">John Doe</p>
          <div className="rounded-full bg-white p-1">
            <span className="font-bold text-black">JD</span>
          </div>
        </div>
      </div>
    </header>
  )
}
