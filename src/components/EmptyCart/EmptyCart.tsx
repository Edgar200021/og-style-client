import { cn } from '@/utils'
import emptyCartIcon from '../../assets/icons/empty-cart.svg'
import { Button } from '../ui/Button'

interface Props {
  className?: string
}

export const EmptyCart = ({ className }: Props) => {
  return (
    <div className={cn('max-w-md mx-auto flex flex-col items-center text-center', className)}>
      <img
        className="size-[212px] mb-8 md:mb-6 md:size-[360px]"
        src={emptyCartIcon}
        alt="Empty cart"
      />
      <span className="text-2xl font-medium uppercase tracking-[.01em] mb-3 md:mb-2">
        Ваша корзина пуста
      </span>
      <span className="text-dark tracking-[.01em] mb-6 md:mb-8">
        Выберите нужный вам товар и добавьте его в корзину.
      </span>
      <Button to="/products?category=обувь&subCategory=кроссовки">
        К покупкам
      </Button>
    </div>
  )
}
