import { AddCartProduct } from '@/store/cart/types'
import { Product } from '@/store/product/types'
import { cn } from '@/utils'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

interface Props
  extends Pick<
    Product,
    'id' | 'discountedPrice' | 'price' | 'colors' | 'size'
  > {
  className?: string
}

export const AddToCartActions = ({
  className,
  discountedPrice,
  price,
  colors,
  size,
}: Props) => {
  const [characteristics, setCharacteristics] = useState<
    Omit<AddCartProduct, 'productId'>
  >({
    color: '',
    size: '',
  })


  const onAddToCart = () => {
    if (!characteristics.color || !characteristics.size) {
      toast.error('Выберите цвет и размер продукта')
      return
    }

    setCharacteristics({ size: '', color: '' })
  }

  return (
    <div className="">
      <div className={'mb-5'}>
        <span className="block tracking-[0.01em] mb-2 capitalize">Размер</span>

        <ul className="flex flex-wrap gap-3">
          {size.map(s => (
            <li key={s}>
              <label
                className={cn(
                  'py-1 px-2 text-dark text-sm bg-gray-300 rounded-[4px] w-full cursor-pointer transition-colors duration-300 ease',
                  {
                    'bg-dark text-white': characteristics.size === s,
                  }
                )}
              >
                <Input
                  onChange={() =>
                    setCharacteristics(prev => ({ ...prev, size: s }))
                  }
                  type="radio"
                  variant="clear"
                  value={s}
                  name="size"
                  className="hidden"
                />
                <span>{s}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={'mb-8'}>
        <span className="block tracking-[0.01em] mb-2 capitalize">Цвет</span>

        <ul className="flex flex-wrap gap-1">
          {colors.map(c => (
            <li
              className={cn(
                'w-fit p-[3px] border-[2px] border-[rgba(0,0,0,0)] rounded-[4px] transition-colors duration-300 ease',
                {
                  ' border-black ': characteristics.color === c,
                }
              )}
              key={c}
            >
              <label
                style={{
                  backgroundColor: c,
                }}
                className={cn('rounded-[4px] w-7 h-7 block cursor-pointer')}
              >
                <Input
                  onChange={() =>
                    setCharacteristics(prev => ({ ...prev, color: c }))
                  }
                  type="radio"
                  variant="clear"
                  value={c}
                  name="size"
                  className="hidden"
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={onAddToCart}
        className={cn('flex items-center gap-x-2 justify-center', className)}
      >
        <span className='relative pr-3 after:content-[""] after:bg-white after:absolute after:w-1 after:h-1 after:rounded-full after:right-0 after:top-[50%] after:translate-y-[-45%] '>
          Добавить в корзину
        </span>
        <span>{discountedPrice || price} ₽</span>
      </Button>
    </div>
  )
}
