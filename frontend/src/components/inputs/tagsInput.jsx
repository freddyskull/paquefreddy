import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const TagsInput = ({
  slugs,
  setSlugs,
  placeholder = 'Add a tag...',
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value) {
        const newSlug = value.toLowerCase().replace(/\s+/g, '-');
        setSlugs([...slugs, newSlug]);
        setInputValue('');
      }
    }
  };

  const handleRemoveTag = (index) => {
    const newSlugs = [...slugs];
    newSlugs.splice(index, 1);
    setSlugs(newSlugs);
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <div className="flex flex-wrap gap-2">
        {slugs.map((slug, index) => (
          <div
            key={index}
            className="dark:bg-secondary dark:text-primary-foreground bg-accent flex items-center rounded-full px-3 py-0! text-slate-600"
          >
            <span className="mt-1 text-[10px] uppercase">{slug}</span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => handleRemoveTag(index)}
              className="p-0! px-1!"
            >
              x
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
