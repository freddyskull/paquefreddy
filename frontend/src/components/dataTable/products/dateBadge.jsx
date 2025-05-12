import React from 'react'
import { formatDistance, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import { useConfigStore } from '@/store/configStore'

export const DateBadge = ({ date }) => {
    const { currency } = useConfigStore();
  const parsedDate = parseISO(date)
  const distance = formatDistance(parsedDate, new Date(), { addSuffix: true, locale: es })
  
  // Si la fecha es hoy, ayer o hace 2 días, mostramos "nuevo"
  const daysDiff = Math.floor((new Date() - parsedDate) / (1000 * 60 * 60 * 24))
  const text = daysDiff <= 2 ? 'nuevo' : distance
  
  return (
    <div className="flex justify-between gap-2 left-0 w-full px-4">
      <span className={`text-[8px] uppercase ${daysDiff <= 2 ? currency === 'USD' ? 'bg-usd text-usd-foreground' : 'bg-primary text-primary-foreground'  : 'bg-muted dark:text-white'} z-10 p-1 px-3 rounded-full`}>
        {text}
      </span>
    </div>
  )
}
