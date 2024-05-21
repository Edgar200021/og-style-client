import { ProductWithBrand } from '@/store/product/types'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { cn } from '@/utils'
import 'swiper/css'
import 'swiper/css/pagination'
import { Collapsible } from '../Collapsible/Collapsible'
import { ProductFavoriteBtn } from '../ProductFavoriteBtn/ProductFavoriteBtn'
import { Share } from '../Share/Share'
import { Button } from '../ui/Button'
import { AddToCartActions } from './AddToCartActions'

import arrowIcon from '../../assets/icons/arrow.svg'
import { ProductList } from '../lists/ProductList'

interface Props extends ProductWithBrand {
  className?: string
}

export const SingleProduct = ({
  className,
  name,
  images,
  price,
  discountedPrice,
  discount,
  description,
  colors,
  size,
  materials,
  brand,
  id,
}: Props) => {

  return (
    <div className={cn('', className)}>
      <Swiper
        style={{
          '--swiper-pagination-color': '#fff',
          '--swiper-pagination-border': '0px',
          '--swiper-pagination-bullet-size': '40px',
          '--swiper-pagination-bullet-width': '20%',
          '--swiper-pagination-bullet-height': '3px',
          '--swiper-pagination-bullet-inactive-color': '#716969',
          '--swiper-pagination-bullet-border-radius': '0px',
          '--swiper-pagination-bullet-horizontal-gap': '10px',
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full h-[460px] [&>.swiper-pagination>span]:border-none mb-4 min-[1026px]:hidden"
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

      <div className="flex gap-x-[18px] container">
        <div className="hidden min-[1026px]:grid  grid-cols-2 grid-rows-[repeat(2,minmax(500px,510px))] gap-5">
          {images.map(image => <div className="rounded-xl overflow-hidden" key={image}>
            <img src={image} className="h-full w-full object-cover"  alt={name}/>
          </div>)}
        </div>
        <div className="w-full max-w-[640px]">
          <h1 className="uppercase font-medium tracking-[0.01em] text-black text-xl md:text-2xl max-w-full mb-8 ">
            {name}
          </h1>
          <div className="flex w-full items-center justify-between mb-14 gap-x-10">
            <div className="flex items-center gap-x-3">
              {discountedPrice ? (
                <>
                  <span className="text-red font-bold text-2xl lg:text-[28px]">
                    {discountedPrice} ₽
                  </span>
                  <span className="text-sm line-through text-gray-500 md:text-base">
                    {price} ₽
                  </span>
                </>
              ) : (
                <span className="text-gray-500 font-bold text-2xl lg:text-[28px]">
                  {price} ₽
                </span>
              )}
            </div>

            <div className="flex gap-x-[30px]">
              <Share shareUrl={window.location.href} />
              <ProductFavoriteBtn
                className="[&>svg]:!stroke-gray-500"
                id={id}
                name={name}
                images={images}
                price={price}
                discount={discount}
                discountedPrice={discountedPrice}
              />
            </div>
          </div>
          <AddToCartActions
            className="mb-[90px]"
            price={price}
            colors={colors}
            size={size}
            discountedPrice={discountedPrice}
            id={id}
          />

          <div>
            <Collapsible
              renderTrigger={(fn, isCollapsed) => (
                <Button
                  className="flex py-4 items-center justify-between  w-full text-lg font-medium tracking-[0.01em] border-t-[1px] border-t-gray-300 md:text-xl "
                  variant="clear"
                  onClick={() => fn(prev => !prev)}
                >
                  О товаре
                  <img
                    className={cn(
                      'w-[15px] h-[8px] md:w-[18px] md:h-[10px] transition-transform duration-300 ease',
                      { '-rotate-180': isCollapsed }
                    )}
                    src={arrowIcon}
                    alt="arrow"
                  />
                </Button>
              )}
            >
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-10 items-center justify-between">
                  <span className="text-gray-500">Материал</span>
                  <span className="capitalize text-sm lg:text-base">
                    {materials[0]}
                  </span>
                </div>
                <div className="flex gap-x-10 items-center justify-between">
                  <span className="text-gray-500">Состав материала</span>
                  <span className="text-sm lg:text-base flex flex-wrap">
                    {materials.join(',')}
                  </span>
                </div>
                <div className="flex gap-x-10 items-center justify-between">
                  <span className="text-gray-500">Производитель</span>
                  <span className="capitalize text-sm lg:text-base">
                    {brand}
                  </span>
                </div>
              </div>
            </Collapsible>

            <Collapsible
              renderTrigger={(fn, isCollapsed) => (
                <Button
                  className="flex py-4 items-center justify-between  w-full text-lg font-medium tracking-[0.01em] md:text-xl border-t-[1px] border-t-gray-300 "
                  variant="clear"
                  onClick={() => fn(prev => !prev)}
                >
                  Описание
                  <img
                    className={cn(
                      'w-[15px] h-[8px] md:w-[18px] md:h-[10px] transition-transform duration-300 ease',
                      { '-rotate-180': isCollapsed }
                    )}
                    src={arrowIcon}
                    alt="arrow"
                  />
                </Button>
              )}
            >
              <p>{description}</p>
            </Collapsible>

            <Collapsible
              renderTrigger={(fn, isCollapsed) => (
                <Button
                  className="flex py-4 items-center justify-between  w-full text-lg font-medium tracking-[0.01em] md:text-xl border-t-[1px] border-t-gray-300 "
                  variant="clear"
                  onClick={() => fn(prev => !prev)}
                >
                  Дополните образ
                  <img
                    className={cn(
                      'w-[15px] h-[8px] md:w-[18px] md:h-[10px] transition-transform duration-300 ease',
                      { '-rotate-180': isCollapsed }
                    )}
                    src={arrowIcon}
                    alt="arrow"
                  />
                </Button>
              )}
            >
              <ProductList className={'[&>article]'} filters={{ brand, limit: 2 }} />
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  )
}
