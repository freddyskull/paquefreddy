import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

export const AutocompleteInput = ({
  register,
  name,
  data = [],
  label = '',
  defaultValue = '',
  setValue
}) => {
  const [inputValue, setInputValue] = useState(defaultValue)
  const [suggestions, setSuggestions] = useState([])

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    if (value.length >= 2) {
      setSuggestions(data.filter(item => item.toLowerCase().includes(value.toLowerCase())))
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion)
    setValue('brand', suggestion)
    setSuggestions([])
  }

  return (
    <div className='relative'>
      <label className='mb-1 font-light text-[13px] dark:text-gray-400 uppercase'>{label}</label>
      <Input
        {...register(name)}
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        placeholder='Buscar marca'
        className='w-full'
      />
      {suggestions.length > 0 && (
        <ul className='z-10 absolute border-gray-300 bg-white mt-1 border rounded w-full'>
          <ScrollArea className='p-2 max-h-[200px]'>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className='hover:bg-primary p-2 rounded-md font-semibold hover:text-primary-foreground cursor-pointer'
              >
                {suggestion}
              </li>
            ))}
          </ScrollArea>
        </ul>
      )}
    </div>
  )
}
