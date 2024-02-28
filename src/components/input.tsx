import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type InputProps = {
  icon?: ReactNode
  label?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, id, error, type = 'text', ...props }, ref) => {
    return (
      <div>
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
          <input type={type} className="border-1 w-full" ref={ref} {...props} />

          {icon && icon}
        </div>

        <div>
          {error && <span className="text-xs text-red-400">{error}</span>}
        </div>
      </div>
    )
  },
)

Input.displayName = 'Input'
