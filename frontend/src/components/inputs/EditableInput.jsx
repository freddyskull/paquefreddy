import React, { useState, useRef } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { PencilIcon } from 'lucide-react';

export const EditableInput = ({
  value = '',
  onChange,
  onBlur,
  type = 'text',
  placeholder = '',
  className = '',
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value || '');
  const inputRef = useRef(null);

  const handleBlur = (e) => {
    setIsEditing(false);
    onBlur?.(e);
    setLocalValue(value || '');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setLocalValue(value);
  };

  const handleChange = (e) => {
    setLocalValue(e.target.value);
    onChange?.(e);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
    inputRef.current?.focus();
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1">
        <div
          className={`cursor-pointer ${isEditing ? 'hidden' : ''}`}
          onDoubleClick={handleDoubleClick}
        >
          {value || placeholder}
        </div>
        <Input
          type={type}
          value={isEditing ? localValue : type === 'number' ? (value || '').toString().replace(',', '.') : value || ''}
          
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleBlur(e);
            } else if (e.key === 'Escape') {
              handleCancel();
            }
          }}
          className={`${className} ${isEditing ? '' : 'hidden'}`}
          placeholder={placeholder}
          ref={inputRef}
          {...props}
        />
      </div>
      {isEditing && (
        <div className="flex gap-2">
          
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
          {/* <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              handleCancel();
            }}
          >
            <XIcon />
          </Button> */}
        </div>
      )}
    </div>
  );
};
