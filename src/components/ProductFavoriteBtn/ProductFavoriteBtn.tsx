import { Product } from '@/store/product/types'
import { cn } from '@/utils'
import sprites from '../../assets/icons/sprite.svg'
import { Button } from '../ui/Button'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { addFavoriteProduct, getFavoriteProduct } from '@/store/product/productSlice'

interface Props
  extends Pick<
    Product,
    'id' | 'discount' | 'discountedPrice' | 'images' | 'name' | 'price'
  > {
  className?: string
}

export const ProductFavoriteBtn = ({
  className,
  id,
  name,
  discount,
  discountedPrice,
  price,
  images
}: Props) => {
  const favoriteProduct = useAppSelector(state => getFavoriteProduct(state, id))
  const dispatch = useAppDispatch()

  const onClickFavorite = () => {
    dispatch(
      addFavoriteProduct({ id, discount, discountedPrice, images, name, price })
    )
  }

  return (
    <Button
      onClick={onClickFavorite}
      variant="clear"
      className={cn(
        'w-6 h-6 block text-white hover:text-red hover:[&>svg]:!stroke-red ',
        {
          'text-red': !!favoriteProduct,
        },
		className
      )}
    >
      <svg
        className={cn('w-full h-full !stroke-black transition-all duration-300 ease', {
          '!stroke-none': !!favoriteProduct,
        })}
      >
        <use xlinkHref={`${sprites}#hearth`} />
      </svg>
    </Button>
  )
}
