import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { PencilIcon, XIcon } from 'lucide-react'
import { Button } from '../ui/button'

export const EditableSelect = ({
  value,
  options,
  onChange,
  onBlur,
  placeholder,
  className = '',
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [localValue, setLocalValue] = useState('none')
  useEffect(() => {
    setLocalValue(value)
  }, [value])


  const handleCancel = () => {
    setIsEditing(false)
    setLocalValue(value)
  }

  const handleChange = (value) => {
    setLocalValue(value)
    onChange?.(value)
    setIsEditing(false)
    onBlur?.(value)
  }

  const handleDoubleClick = (e) => {
    e.stopPropagation()
    setIsEditing(true)
  }

  return (
    <div className="flex items-center gap-1 w-full">
      <div className="flex-1">
        <div
          className={`cursor-pointer w-full line-clamp-1 ${isEditing ? 'hidden' : ''}`}
          onDoubleClick={handleDoubleClick}
          title={value || placeholder}
        >
          {value || placeholder}
        </div>
        {isEditing && (
          <Select
            value={localValue}
            size="sm"
            onValueChange={handleChange}
            className={`bg-accent ${className}`}
            {...props}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none" onClick={handleCancel}>
                Cancelar
              </SelectItem>
              {options.map((option) => (
                <SelectItem key={option.label} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {/* {isEditing && (
          <div className="flex items-center gap-1">
            <Button
              variant="default"
              size="sm"
              className="bg-yellow-600"
              onClick={(e) => {
                e.stopPropagation();
                handleBlur(e);
              }}
            >
              <PencilIcon />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleCancel();
              }}
            >
              <XIcon />
            </Button>
          </div>
        )} */}
      </div>
    </div>
  )
}
