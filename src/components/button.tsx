import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  className?: string
  variation?: 'primary' | 'ghost'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  className,
  variation = 'primary',
  ...props
}: ButtonProps) {
  const variations = {
    primary: '',
    ghost: 'grayscale',
  }

  return (
    <button
      className={`flex cursor-pointer items-center justify-center bg-gradient-to-r from-primary to-secondary px-2 text-center text-white disabled:opacity-30 ${className} ${variations[variation]}`}
      {...props}
    >
      <span className="">{children}</span>
    </button>
  )
}
