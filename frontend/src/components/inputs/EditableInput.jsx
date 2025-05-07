import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { PencilIcon, XIcon } from 'lucide-react';

export const EditableInput = ({
  value,
  onChange,
  onBlur,
  type = 'text',
  placeholder,
  className = '',
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  const handleBlur = (e) => {
    setIsEditing(false);
    onBlur?.(e);
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
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1">
        <div
          className={`cursor-pointer ${isEditing ? 'hidden' : ''}`}
          onDoubleClick={handleDoubleClick}
          // onClick={(e) => {
          //   e.stopPropagation();
          //   setIsEditing(true);
          // }}
        >
          {value || placeholder}
        </div>
        <Input
          type={type}
          value={isEditing ? localValue : value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${className} ${isEditing ? '' : 'hidden'}`}
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
      )}
    </div>
  );
};
