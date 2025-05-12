import React, { useState, useEffect } from 'react';
import { useController } from 'react-hook-form';

export const TagsInput = ({ name, control, slugs: externalSlugs = [], setSlugs, placeholder = 'Agregar palabras clave', label = 'Palabras clave' }) => {
  const [internalSlugs, setInternalSlugs] = useState(externalSlugs || []);
  
  const { field } = useController({
    name,
    control,
    defaultValue: externalSlugs || [],
  });

  // Sincronizar los slugs externos con el estado interno
  useEffect(() => {
    if (externalSlugs && Array.isArray(externalSlugs) && externalSlugs.length > 0) {
      // Filtrar valores vacíos o nulos
      const validSlugs = externalSlugs.filter(slug => slug && slug.trim() !== '');
      if (JSON.stringify(validSlugs) !== JSON.stringify(internalSlugs)) {
        setInternalSlugs(validSlugs);
        field.onChange(validSlugs);
        if (setSlugs) {
          setSlugs(validSlugs);
        }
      }
    } else if (internalSlugs.length > 0) {
      // Si no hay slugs externos pero hay internos, limpiar
      setInternalSlugs([]);
      field.onChange([]);
    }
  }, [externalSlugs]);

  const addTag = (value) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      const newSlugs = [...new Set([...internalSlugs, trimmedValue])];
      setInternalSlugs(newSlugs);
      field.onChange(newSlugs);
      if (setSlugs) {
        setSlugs(newSlugs);
      }
      return true;
    }
    return false;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const value = e.target.value;
      if (addTag(value)) {
        e.target.value = '';
      }
    }
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    if (value) {
      if (addTag(value)) {
        e.target.value = '';
      }
    }
  };

  const removeTag = (index) => {
    const newSlugs = internalSlugs.filter((_, i) => i !== index);
    setInternalSlugs(newSlugs);
    field.onChange(newSlugs);
    if (setSlugs) {
      setSlugs(newSlugs);
    }
  };

  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <div className="flex flex-wrap gap-2 rounded-md border border-input bg-secondary px-3 py-1">
        {internalSlugs.map((tag, index) => (
          <div key={index} className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs text-white">
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="ml-1 text-white/70 hover:text-white"
            >
              ×
            </button>
          </div>
        ))}
        <input
          name={name}
          type="text"
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={internalSlugs.length === 0 ? placeholder : ''}
          className="flex-1 bg-transparent outline-none"
        />
      </div>
    </div>
  );
};
