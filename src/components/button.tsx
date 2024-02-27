import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`flex cursor-pointer items-center justify-center bg-gradient-to-r from-primary to-secondary px-2 text-center disabled:opacity-30 ${className}`}
      {...props}
    >
      <span className="text-white">{children}</span>
    </button>
  )
}
