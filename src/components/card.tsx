import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  title: string
  headerComponent?: ReactNode
  footerComponent?: ReactNode
}

export function Card({
  children,
  title,
  headerComponent,
  footerComponent,
}: CardProps) {
  return (
    <div className="rounded-md bg-white shadow-md">
      <header className="flex items-center justify-between border-b-2 px-4 py-1">
        <h1 className="font-bold text-secondary">{title}</h1>

        {headerComponent && headerComponent}
      </header>

      {children}

      {footerComponent && (
        <footer className="border-t-2">{footerComponent}</footer>
      )}
    </div>
  )
}
