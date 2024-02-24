import { Header } from '@/components/header'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <main className="m-auto max-w-5xl px-4 md:px-12">
        <div>{children}</div>
      </main>
    </>
  )
}
