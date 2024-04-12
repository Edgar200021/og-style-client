import { Link } from 'react-router-dom'
import { Product } from '../../store/product/types'
import { cn } from '../../utils/cn'

interface Props {
  className?: string
  category: Product['category']
  subCategory: string
  image: string
  title: string
  price: number
}

export const Sell = ({
  className,
  category,
  image,
  price,
  subCategory,
  title,
}: Props) => {
  return (
    <article className={cn('p-4 md:p-6 lg:p-8 relative bg-gray-300 h-[170px] overflow-hidden rounded-xl', className)}>
      <Link
        className="absolute w-full h-full inset-0 cursor-pointer z-20 "
        to={`/products?category=${category}&subCategory=${subCategory}`}
      />
      <img src={image} alt={title} className="absolute  -right-20 top-0 object-contain  h-full w-full" />
      <div className="flex flex-col justify-between font-semibold h-full items-start relative z-10">
        <span className="text-base md:text-2xl">{title}</span>
        <span className="py-2 px-5 bg-white rounded-xl text-sm md:text-base lg:text-xl">
          от {price} ₽
        </span>
      </div>
    </article>
  )
}
