import { CartProduct as ICartProduct } from '@/store/cart/types'
import { cn } from '@/utils'
import { useCallback, useEffect, useState } from 'react'
import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus.svg'

import {
  useDeleteCartProductMutation,
  useUpdateCartProductMutation,
} from '@/store/cart/cartApi'
import { decrement, increment } from '@/store/cart/cartSlice'
import { useAppDispatch } from '@/store/store'
import { showError } from '@/utils/showError'
import toast from 'react-hot-toast'
import { useDebounceValue } from 'usehooks-ts'
import { Button } from '../ui/Button'

interface Props extends ICartProduct {
  className?: string
}

export const CartProduct = ({
  className,
  id,
  quantity,
  price,
  discountedPrice,
  images,
  name,
  size,
  color,
}: Props) => {
  return (
    <div
      className={cn(
        'w-full py-4 px-[14px] rounded-xl bg-gray-200 flex flex-col gap-y-6 min-[600px]:flex-row min-[600px]:justify-between min-[600px]:gap-y-0 min-[600px]:gap-x-5 ',
        className
      )}
    >
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-y-0 md:gap-x-6 md:items-center max-w-[504px]">
        <div className="flex gap-x-[14px]">
          <div className="w-[68px] h-[83px] bg-gray-100 rounded-lg overflow-hidden md:w-[129px] md:h-[156px] shrink-0">
            <img
              src={images[0]}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="uppercase tracking-[.01em] md:hidden">{name}</span>
        </div>
        <div>
          <span className="hidden md:block text-lg uppercase tracking-[.01em] mb-4">
            {name}
          </span>
          <span className="flex items-center gap-x-1 text-sm mb-2">
            <span className="text-gray-500">Размер</span>
            <span>{size}</span>
          </span>
          <span className="flex items-center gap-x-1 text-sm">
            <span className="text-gray-500">Цвет</span>
            <span
              className="size-4 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
          </span>
        </div>
      </div>
      <CartProductActions
        id={id}
        price={price}
        discountedPrice={discountedPrice}
        quantity={quantity}
        className="max-w-[260px] lg:max-w-[370px] w-full"
      />
    </div>
  )
}

interface CartProductActionsProps
  extends Pick<
    Props,
    'price' | 'discountedPrice' | 'quantity' | 'className' | 'id'
  > {}

const CartProductActions = ({
  price,
  discountedPrice,
  quantity,
  className,
  id,
}: CartProductActionsProps) => {
  const [updateCartProduct, { isLoading: isUpdateLoading }] =
    useUpdateCartProductMutation()
  const [deleteCartProduct, { isLoading: isDeleteLoading }] =
    useDeleteCartProductMutation()
  const [count, setCount] = useState(quantity)
  const [debouncedCount] = useDebounceValue(count, 1000)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (debouncedCount === quantity) return
    ;(async () => {
      try {
        await updateCartProduct({
          quantity: debouncedCount,
          cartProductId: id,
        }).unwrap()
      } catch (e) {
        showError(e)
      }
    })()
  }, [id, quantity, debouncedCount])

  const onSetCount = (action: 'increment' | 'decrement') => {
    if (action === 'decrement' && count === 1) return
    setCount(prev => (action === 'decrement' ? prev - 1 : prev + 1))
    dispatch(
      action === 'increment'
        ? increment({ discountedPrice, price })
        : decrement({ discountedPrice, price })
    )
  }

  const onDeleteCartProduct = useCallback(async () => {
    try {
      await deleteCartProduct({ cartProductId: id }).unwrap()
      toast.success('Товар успешно удален из корзины')
    } catch (e) {
      showError(e)
    }
  }, [id])

  return (
    <div
      className={cn(
        'flex flex-col gap-y-6 min-[600px]:gap-y-[58px]',
        className
      )}
    >
      <div className="flex items-start  justify-between gap-x-5">
        <div className="max-w-[130px] w-full rounded-[25px] bg-white py-2 px-4 flex items-center justify-between gap-x-6">
          <Button
            onClick={onSetCount.bind(null, 'decrement')}
            disabled={isUpdateLoading || isDeleteLoading || count === 1}
            variant="clear"
            className="w-5 h-5"
          >
            <img className="w-full h-full" src={minusIcon} alt="Minus" />
          </Button>
          <span>{count}</span>
          <Button
            onClick={onSetCount.bind(null, 'increment')}
            disabled={isUpdateLoading || isDeleteLoading}
            variant="clear"
          >
            <img width={20} height={20} src={plusIcon} alt="Plus" />
          </Button>
        </div>
        <div className="flex flex-col gap-y-1 ">
          <span className={'text-2xl uppercase tracking-[.01em]'}>
            {discountedPrice ?? price} ₽
          </span>
          {discountedPrice && (
            <span className="text-gray-500 line-through text-sm tracking-[.01em]">
              {price} ₽
            </span>
          )}
        </div>
      </div>
      <Button
        variant="clear"
        onClick={onDeleteCartProduct}
        disabled={isUpdateLoading || isDeleteLoading}
        className="font-semibold uppercase tracking-[.01em] self-start min-[600px]:self-end text-gray-500 disabled:text-gray-400 text-base mr-5"
      >
        Удалить
      </Button>
    </div>
  )
}
