import { ReactNode } from 'react'

type InputProps = {
  icon?: ReactNode
  className?: string
} & React.HTMLProps<HTMLInputElement>

export function Input({ icon, className, ...props }: InputProps) {
  return (
    <div className={`flex items-center rounded-sm border-2 p-1 ${className}`}>
      <input type="text" className="border-1 w-full" {...props} />

      {icon && icon}
    </div>
  )
}
