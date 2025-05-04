import React from 'react'
import { formatDistance, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export const DateBadge = ({ date }) => {
  const parsedDate = parseISO(date)
  const distance = formatDistance(parsedDate, new Date(), { addSuffix: true, locale: es })
  
  // Si la fecha es hoy, ayer o hace 2 días, mostramos "nuevo"
  const daysDiff = Math.floor((new Date() - parsedDate) / (1000 * 60 * 60 * 24))
  const text = daysDiff <= 2 ? 'nuevo' : distance
  
  return (
    <div className="flex justify-between gap-2 absolute top-5 left-0 w-full px-4">
      <span className={`text-[8px] uppercase ${daysDiff <= 2 ? 'bg-primary' : 'bg-muted'} text-primary-foreground z-10 p-1 px-3 rounded-full`}>
        {text}
      </span>
    </div>
  )
}
