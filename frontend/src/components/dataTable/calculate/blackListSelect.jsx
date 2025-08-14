import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useBlacklistStore } from '@/store/blacklistStore'
import React from 'react'


export const BlackListSelect = ({ blackListData, setBlackListData }) => {
    const { blacklist } = useBlacklistStore();
  return (
    <Select
      value={blackListData}
      onValueChange={setBlackListData}
    >
      <SelectTrigger className="w-[50%]" >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value={null} selected>
        Sin usuario
      </SelectItem>
        {blacklist.map((blacklist) => (
          <SelectItem key={blacklist.id} value={blacklist} describedby="asignar usuario">
            {blacklist.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
