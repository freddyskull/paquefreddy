import React from 'react'
import { Input } from './ui/input'
export const FormInput = ({
  label,
  register,
  name,
  type = 'text',
  placeholder,
  error
}) => {
  return (
    <div className='form-input-container'>
      <label htmlFor={name} className={`mb-1 font-light text-[13px] dark:text-gray-400 uppercase ${error[name] && 'text-red-500'}`}>{label}</label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        className={error[name] ? 'border-red-500' : ''}
        {
        ...register(name,
          {
            setValueAs: (value) => {
              if (value === null) return null
              if (value === '') return ''
              return type === 'number' ? parseFloat(value) : value
            }
          })
        }
      />
      {error[name]
        ? (
          <span className='text-red-500 text-xs'>{error[name]?.message}</span>
        )
        : (
          <span className='opacity-0 text-xs'>ERROR</span>
        )}
    </div>
  )
}
