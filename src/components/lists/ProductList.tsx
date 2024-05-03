import { useRef } from 'react'
import type { SwiperClass } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useGetProductsQuery } from '../../store/product/productApi'
import { FilterProducts } from '../../store/product/types'
import { cn } from '../../utils/cn'
import { Product } from '../Product/Product'
import { Button } from '../ui/Button'

import slideArrowIcon from '../../assets/icons/sliderarrow.svg'

interface Props {
  filters?: Partial<FilterProducts>
  className?: string
  withSlider?: boolean
  title?: string
}
export const ProductList = ({
  filters,
  className,
  withSlider,
  title,
}: Props) => {
  const { data, isLoading, isError } = useGetProductsQuery({
    limit: 16,
    ...filters,
  })
  const swiperRef = useRef<SwiperClass>()

  console.log(data)

  if (!data) return null
  if (isLoading) return <h1>Loading...</h1>

  if (withSlider) {
    return (
      <div className={cn('relative', className)}>
        <div className="flex justify-between gap-x-10 items-center mb-4 md:mb-8">
          {title && (
            <h2 className="font-medium text-2xl tracking-[0.01em] md:text-[32px] lg:text-[40px]">
              {title}
            </h2>
          )}
          <div className="flex items-center gap-x-4">
            <Button
              variant="clear"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img
                className="size-5 md:size-8 lg:size-10"
                src={slideArrowIcon}
                alt="Arrow"
              />
            </Button>
            <Button
              variant="clear"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img
                className="size-5 md:size-8 lg:size-10 rotate-180"
                src={slideArrowIcon}
                alt="Arrow"
              />
            </Button>
          </div>
        </div>
        <Swiper
          onAfterInit={swiper => (swiperRef.current = swiper)}
          onInit={swiper => (swiperRef.current = swiper)}
          onSwiper={swiper => (swiperRef.current = swiper)}
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1070: {
              watchSlidesProgress: true,
              //  slidesPerView: '4.5',
              //  slidesPerGroup: 4,
              slidesPerView: 4,
            },
          }}
        >
          {data.data.products.map(product => (
            <SwiperSlide key={product.id}>
              <Product className="grow" {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  }

  return (
    <ul
      className={cn('flex flex-wrap gap-4 md:gap-5 ', className)}
    >
      {data.data.products.map(product => (
        <Product className="grow basis-80" key={product.id} {...product} />
      ))}
    </ul>
  )
}
