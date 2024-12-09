import { Skeleton } from '@/components/ui/skeleton'

export const ProductsSkeleton = () => {
  return (
    <div className='grid grid-cols-4 gap-8'>
      {Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className='flex flex-col space-y-3'>
          <Skeleton className='h-[120px] rounded-xl' />
          <div className='space-y-2 flex flex-col items-center'>
            <Skeleton className='h-4 w-[90%]' />
            <Skeleton className='h-4 w-[80%]' />
          </div>
        </div>
      ))}
    </div>
  )
}
