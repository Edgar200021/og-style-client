import { Product as IProduct } from '../../store/product/types'
import { cn } from '../../utils/cn'

// Import Swiper styles
import 'swiper/css'
import { Button } from '../ui/Button'

import 'swiper/css'
import 'swiper/css/pagination'

interface Props extends IProduct {
  className?: string
}

import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductFavoriteBtn } from '../ProductFavoriteBtn/ProductFavoriteBtn'

export const Product = ({
  className,
  images,
  name,
  price,
  discountedPrice,
  discount,
  id,
}: Props) => {
  return (
    <article
      className={cn(
        'w-full min-w-[140px] max-md:max-w-[300px] md:max-w-[320px]  ',
        className
      )}
    >
      <div className="h-40 md:h-80 bg-[#f3f1f4] relative rounded-xl mb-[14px] md:mb-5 ">
        <Link
          className="absolute h-full w-full inset-0 cursor-pointer z-20 "
          to={`/products/${id}`}
        />
        <div className="absolute right-[14px] top-[14px] md:right-[30px] md:top-[30px] z-30">
          <ProductFavoriteBtn
            id={id}
            name={name}
            images={images}
            price={price}
            discount={discount}
            discountedPrice={discountedPrice}
          />
        </div>

        <Swiper
          style={{
            //@ts-expect-error ---
            '--swiper-pagination-color': '#716969',
            '--swiper-pagination-bullet-inactive-color': '#ffffff',
          }}
          modules={[Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full [&>span.swiper-pagination-bullet]:hidden z-20"
        >
          {images.map(image => (
            <SwiperSlide key={image}>
              <img
                src={image}
                alt={name}
                className="object-cover object-bottom w-full h-full rounded-xl "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h3 className="text-sm md:text-xl mb-2 md:mb-3 text-dark tracking-[0.01em]">
        {name}
      </h3>
      <div className="flex items-center mb-4 gap-x-2 md:gap-x-3 md:mb-0  ">
        {discount ? (
          <>
            <span className="font-bold text-sm text-black md:text-2xl md:font-semibold">
              {discountedPrice} ₽
            </span>
            <span className="line-through text-[10px] text-gray-500 md:text-lg">
              {price} ₽
            </span>
            <span className="text-xs text-red font-semibold md:py-1 md:px-2 md:rounded-lg md:bg-yellow-200 md:text-white md:font-medium md:text-sm ">
              {discount}%
            </span>
          </>
        ) : (
          <span className="font-bold text-sm text-black md:text-2xl md:font-semibold">
            {price} ₽
          </span>
        )}
      </div>

      <Button className="md:hidden py-2 px-[18px] min-w-[96px] max-w-[96px] text-xs  text-white">
        В корзину
      </Button>
    </article>
  )
}
