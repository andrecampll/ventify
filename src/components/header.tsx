import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary px-4 py-1 md:px-12">
      <div className="m-auto flex max-w-5xl items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image alt="logo" width={30} height={30} src="/logo.png" />
            <span className="font-bold text-white">Music Management Tool</span>
          </div>
        </Link>

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
