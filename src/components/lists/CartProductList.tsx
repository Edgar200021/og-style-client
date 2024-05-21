import { CartProduct as ICartProduct } from '@/store/cart/types'
import { cn } from '@/utils'
import { CartProduct } from '../CartProduct/CartProduct'
import { Paginate } from '../Paginate/Paginate'

interface Props {
  className?: string
  cartProducts: ICartProduct[]
  totalPages: number
}

export const CartProductList = ({
  className,
  cartProducts,
  totalPages,
}: Props) => {
  return (
    <div className={cn('flex flex-col gap-y-10', className)}>
      <ul className={'flex flex-col gap-y-2 md:gap-y-4'}>
        {cartProducts.map(p => (
          <li key={p.id}>
            <CartProduct {...p} />
          </li>
        ))}
      </ul>
      <Paginate totalPages={totalPages} />
    </div>
  )
}
