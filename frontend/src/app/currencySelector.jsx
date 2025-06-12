import React from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useConfigStore } from '@/store/configStore'

export const CurrencySelector = () => {
  const { currency: defaultCurrency, setCurrency } = useConfigStore()
  return (
    <ToggleGroup type="single" defaultValue={defaultCurrency} onValueChange={setCurrency} className="flex">
      <ToggleGroupItem value="USD">USD</ToggleGroupItem>
      <ToggleGroupItem value="BS">BS</ToggleGroupItem>
    </ToggleGroup>
  )
}
