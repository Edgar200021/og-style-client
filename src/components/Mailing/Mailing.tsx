import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

interface Props {
  className?: string
}

export const Mailing = ({ className }: Props) => {
  return (
    <article
      className={cn(
        'bg-grad2 rounded-xl py-12 xl:py-20 lg:py-[104px] px-3 xsm:px-6',
        className
      )}
    >
      <div className="max-w-[630px] mx-auto text-white  ">
        <div className="text-center flex flex-col gap-y-2 mb-6 md:mb-8 lg:mb-10">
          <h2 className="font-semibold text-xl tracking-[0.01em] md:text-[32px] lg:text-5xl">
            Подпишись на рассылку
          </h2>
          <span className="text-sm tracking-[0.01em] md:text-base lg:text-lg ">
            Чтобы всегда быть в курсе интересного
          </span>
        </div>
        <div className='md:px-6'>
          <Input
            variant="transparent"
            placeholder="Ваш email"
            className="mb-3 md:mb-4 lg:mb-6"
          />
          <Button className="mb-2" variant="secondary">
            Подписаться
          </Button>
          <div className="flex gap-x-2">
            <Input
              variant="transparent"
              type="checkbox"
              className="w-[14px] h-[14px]  rounded-sm p-0"
            />
            <span className="font-medium text-gray-200 text-xs">
              Я согласен с политикой обработки и политикой конфиденциальности
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
