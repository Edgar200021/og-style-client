import { Button } from '@/components/ui/Button'
import { cn } from '@/utils'
import notFoundIcon from '../assets/icons/404.svg'

interface Props {
  className?: string
}

export const NotFoundPage = ({ className }: Props) => {
  return (
    <main className={cn('', className)}>
      <div className="container">
        <div className="max-w-[850px] mx-auto flex items-center flex-col text-center">
          <img
            className="w-[328px] h-[186px] md:w-[585px] md:h-[332px] mb-4 md:mb-6"
            src={notFoundIcon}
            alt="Not found"
          />
          <span className="md:text-xl tracking-[.1em] mb-8 md:mb-10">
            К сожалению такой страницы не существует или адрес введен неверно
          </span>
          <Button className="max-w-[290px]" to="/">
            На главную
          </Button>
        </div>
      </div>
    </main>
  )
}
