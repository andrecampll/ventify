import { ReactNode } from 'react'

type InputProps = {
  icon?: ReactNode
  label?: string
  error?: string
} & React.HTMLProps<HTMLInputElement>

export function Input({ icon, id, error, ...props }: InputProps) {
  return (
    <div className="[&+&]:mt-2">
      {props.label && (
        <label className="text-sm" htmlFor={id}>
          {props.label}
        </label>
      )}

      <div
        className={`mt-1 flex items-center gap-2 rounded-sm border-2 px-2 py-1 ${
          error ? 'border-red-400 [&>svg]:text-red-400' : 'border-gray-200'
        }`}
      >
        <input type="text" className="border-1 w-full" {...props} />

        {icon && icon}
      </div>

      <div>{error && <span className="text-red-400">{error}</span>}</div>
    </div>
  )
}
