import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'

export const SlugsInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault()
      setTags([...tags, inputValue.trim()])
      setInputValue('')
    }
  }

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div>
      <label className='mb-1 font-light text-[13px] dark:text-gray-400 uppercase' htmlFor='slug'>Etiquetas</label>
      <div className='flex flex-wrap items-center gap-1'>
        <Input
          id='slug'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder='Añadir etiqueta y presionar Enter'
          className='flex-grow'
        />
        {tags !== null && (
          tags.map((tag, index) => (
            <Badge key={index} className='rounded-md text-foreground closebtn'>
              <span className='text-[10px] uppercase'>{tag}</span>
              <button variant='link' type='button' className='bg-slate-50 ml-2 p-1 rounded-full' onClick={() => removeTag(index)}>
                <X size={10} />
              </button>
            </Badge>
          ))
        )}
      </div>
    </div>
  )
}
