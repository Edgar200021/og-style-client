import { cn } from '@/utils'

interface Props {
  className?: string
}

export const PageLoader = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'min-h-[100svh] w-full absolute left-0 top-0 flex items-center justify-center backdrop-blur-lg z-[300]',
        className
      )}
    >
      <div className={cn('flex flex-row gap-2', className)}>
        <div className="w-4 h-4 rounded-full bg-dark animate-bounce" />
        <div className="w-4 h-4 rounded-full bg-dark animate-bounce [animation-delay:-.3s]" />
        <div className="w-4 h-4 rounded-full bg-dark animate-bounce [animation-delay:-.5s]" />
      </div>
    </div>
  )
}
