import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center bg-gradient-to-r from-primary to-secondary px-2 text-center ${className}`}
      {...props}
    >
      <span className="text-white">{children}</span>
    </button>
  )
}
