
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

/**
 * Componente de input de búsqueda reutilizable
 * @param {string} value - Valor del input
 * @param {function} onChange - Función para actualizar el valor


 * @param {string[]} searchFields - Campos sobre los que se busca
 * @param {string} dateFrom - Fecha inicial (YYYY-MM-DD)
 * @param {string} dateTo - Fecha final (YYYY-MM-DD)
 * @param {function} onDateFromChange - Actualiza la fecha inicial
 * @param {function} onDateToChange - Actualiza la fecha final
 * @param {string} timeFrom - Hora inicial (HH:mm)
 * @param {string} timeTo - Hora final (HH:mm)
 * @param {function} onTimeFromChange - Actualiza la hora inicial
 * @param {function} onTimeToChange - Actualiza la hora final
 * @param {boolean} showDateFilter - Mostrar filtro de fecha
 * @param {boolean} showTimeFilter - Mostrar filtro de hora
 * @param {function} onClearFilters - Limpia todos los filtros
 */
export const DefaultTableSearch = ({
  value,
  onChange,
  searchFields = [],
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
  timeFrom,
  timeTo,
  onTimeFromChange,
  onTimeToChange,
  showDateFilter = false,
  showTimeFilter = false,
  onClearFilters,
}) => {
  const showDate = showDateFilter || searchFields.includes('createdAt')
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-end gap-2 mb-2">
      <div className='w-full'>
        <label htmlFor="">Buscar por: </label>
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={searchFields.length > 0 ? `Buscar por: ${searchFields.join(', ')}` : 'Buscar...'}
          className="px-2 py-1 border rounded w-full text-sm"
        />
      </div>
      {showDate && (
        <div className="flex items-end gap-2">
          <div className='flex flex-col'>
            <label className="">Rango de fecha</label>
            <Input
              type="date"
              value={dateFrom || ''}
              onChange={e => onDateFromChange?.(e.target.value)}
              className="px-2 py-1 border rounded text-sm"
            />
          </div>
          <Input
            type="date"
            value={dateTo || ''}
            onChange={e => onDateToChange?.(e.target.value)}
            className="px-2 py-1 border rounded text-sm"
          />
        </div>
      )}
      {showTimeFilter && (
        <div className="flex items-end gap-2">
          <div className='flex flex-col'>
            <label className="">Rango de hora</label>
            <Input
              type="time"
              value={timeFrom || ''}
              onChange={e => onTimeFromChange?.(e.target.value)}
              className="px-2 py-1 border rounded text-sm"
            />
          </div>
          <Input
            type="time"
            value={timeTo || ''}
            onChange={e => onTimeToChange?.(e.target.value)}
            className="px-2 py-1 border rounded text-sm"
          />
        </div>
      )}
      <div className="flex items-end">
        <Button
          type="button"
          variant="outline"
          onClick={onClearFilters}
        >
          Limpiar
        </Button>
      </div>
    </div>
  )
}

export default DefaultTableSearch
