import { cn } from '@/utils'

interface Props {
  className?: string
}

export const MainLoader = ({ className }: Props) => {
  return (
    <div className={cn("flex flex-row gap-2", className)}>
      <div className="w-4 h-4 rounded-full bg-dark animate-bounce" />
      <div className="w-4 h-4 rounded-full bg-dark animate-bounce [animation-delay:-.3s]" />
      <div className="w-4 h-4 rounded-full bg-dark animate-bounce [animation-delay:-.5s]" />
    </div>
  )
}
