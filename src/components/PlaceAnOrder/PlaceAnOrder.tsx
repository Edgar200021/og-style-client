import { getCartPriceInfo, setInitialValues } from '@/store/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { cn } from '@/utils'
import { useEffect } from 'react'
import { Button } from '../ui/Button'

interface Props {
  className?: string
  totalDiscountedPrice: number
  totalPrice: number
  productsWithoutDiscount: number
}

export const PlaceAnOrder = ({
  className,
  totalPrice,
  totalDiscountedPrice,
  productsWithoutDiscount,
}: Props) => {
  const state = useAppSelector(getCartPriceInfo)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      setInitialValues({
        totalDiscountedPrice,
        totalPrice,
      })
    )
  }, [totalDiscountedPrice, totalPrice])

  return (
    <div
      className={cn(
        'max-w-[415px] py-6 px-4 md:p-6 rounded-xl bg-gray-200 w-full',
        className
      )}
    >
      <div className="pb-5 border-b-[1px] border-b-gray-300 flex flex-col gap-y-4 mb-5">
        <span className="flex justify-between gap-x-4 ">
          <span className="text-[#8c8c8c] tracking-[.01em]">
            Товаров без учета скидки ({productsWithoutDiscount} шт)
          </span>
          <span className="text-[#505050]">
            {state.totalPrice || totalPrice} ₽
          </span>
        </span>
        <span className="flex justify-between gap-x-4 ">
          <span className="text-[#8c8c8c] tracking-[.01em]">Скидка</span>
          <span className="text-[#505050]">
            {(state.totalPrice || totalPrice) -
              (state.totalDiscountedPrice || totalDiscountedPrice)}{' '}
            ₽
          </span>
        </span>
      </div>
      <div className="flex items-center justify-between uppercase text-[#1e1e1e] font-medium text-lg tracking-[.01em] mb-10">
        <span>Итого</span>
        <span>{state.totalDiscountedPrice || totalDiscountedPrice} ₽</span>
      </div>
      <Button>Оформить заказ</Button>
    </div>
  )
}
