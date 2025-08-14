import { DateBadge } from '@/components/dataTable/products/dateBadge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useRecordsStore } from '@/store/recordsStore';
import { SellingStatsLoop } from './sellingStatsLoop';
import { Skeleton } from '@/components/ui/skeleton';

export const SellingProductsTrends = () => {
  const [selected, setSelected] = useState('mas-vendido');
  const { records, salesStats } = useRecordsStore();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // calcular el año
  const currentYear = new Date().getFullYear();
  const startOfYear = `${currentYear}-01-01`;
  const endOfYear = `${currentYear}-12-31`;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await salesStats(startOfYear, endOfYear);
      setData(result);
      setIsLoading(false);
    }
    fetchData();
  }, [records, salesStats, startOfYear, endOfYear]);

  return (
    <Card className="dark:bg-secondary bg-white">
      {isLoading ? (
        <div className="flex h-full w-full flex-col gap-4 px-4">
          <div className="flex items-center h-8 w-[60%] gap-1">
            <Skeleton className="h-full w-full" />
            <Skeleton className="h-full w-full" />
            <Skeleton className="h-4 w-55" />
          </div>
          <div className="mt-4 flex w-full flex-col gap-2 overflow-auto h-[130px]">
            {[...Array(5)].map((_item, i) => (
              <div key={i} className="flex h-8 w-full gap-2">
                <Skeleton className="h-full w-[140%]" />
                <Skeleton className="h-full w-full" />
                <Skeleton className="h-full w-full" />
                <Skeleton className="h-full w-[40%]" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ToggleGroup
                type="single"
                className="bg-accent/50"
                value={selected}
                onValueChange={setSelected}
              >
                <ToggleGroupItem value="mas-vendido" className="text-xs">
                  MAS VENDIDOS
                </ToggleGroupItem>
                <ToggleGroupItem value="menos-vendido" className="px-4 text-xs">
                  MENOS VENDIDOS
                </ToggleGroupItem>
              </ToggleGroup>
              <span className="text-foreground/50 ml-2 text-xs">
                (Anualmente)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="max-h-[120px] overflow-auto">
            {data && (
              <SellingStatsLoop
                data={
                  selected === 'mas-vendido'
                    ? data?.highSelling
                    : data?.lowSelling
                }
              />
            )}
          </CardContent>
        </>
      )}
    </Card>
  );
};
