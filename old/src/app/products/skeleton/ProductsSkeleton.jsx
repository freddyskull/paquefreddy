import { Skeleton } from '@/components/ui/skeleton'

export const ProductsSkeleton = () => {
  return (
    <div className='gap-8 grid grid-cols-1 md:grid-cols-4 p-4'>
      {Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className='flex flex-col space-y-3'>
          <Skeleton className='rounded-xl h-[120px]' />
          <div className='flex flex-col items-center space-y-2'>
            <Skeleton className='w-[90%] h-4' />
            <Skeleton className='w-[80%] h-4' />
          </div>
        </div>
      ))}
    </div>
  )
}
