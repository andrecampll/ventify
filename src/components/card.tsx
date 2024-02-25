import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  title: string
  actionComponent?: ReactNode
}

export function Card({ children, title, actionComponent }: CardProps) {
  return (
    <div className="rounded-md bg-white shadow-md">
      <div className="flex items-center justify-between border-b-2 px-4 py-1">
        <h1 className="font-bold text-secondary">{title}</h1>

        {actionComponent && actionComponent}
      </div>

      {children}
    </div>
  )
}
