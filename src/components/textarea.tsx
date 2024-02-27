import { forwardRef, ReactNode } from 'react'

type TextAreaProps = {
  icon?: ReactNode
  label?: string
  error?: string
} & React.HTMLProps<HTMLTextAreaElement>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ icon, id, error, className = '', ...props }, ref) => {
    return (
      <div className={`${className}`}>
        {props.label && (
          <label className="text-sm" htmlFor={id}>
            {props.label}
          </label>
        )}

        <div
          className={`mt-1 flex items-center gap-2 rounded-sm border-2 p-1 md:h-full ${
            error ? 'border-red-400 [&>svg]:text-red-400' : 'border-gray-200'
          }`}
        >
          <textarea
            className="border-1 w-full md:h-full md:resize-none"
            ref={ref}
            {...props}
          />

          {icon && icon}
        </div>

        <div>
          {error && <span className="text-xs text-red-400">{error}</span>}
        </div>
      </div>
    )
  },
)

TextArea.displayName = 'TextArea'
