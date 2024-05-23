import { useOnClickOutside } from 'usehooks-ts'
import { useQueryParams } from '../../hooks/useQueryParams'
import { useGetProductFiltersQuery } from '../../store/product/productApi'
import { Product } from '../../store/product/types'
import { Button } from '../ui/Button'
import './slider.css'

import { cache } from '@/utils/cache'
import _ from 'lodash'
import { useEffect, useRef, useState } from 'react'
import arrowIcon from '../../assets/icons/arrow.svg'
import { PRODUCT_FILTER_LABELS } from '../../constants/productFilters'
import { cn } from '../../utils/cn'
import { Collapsible } from '../Collapsible/Collapsible'
import { CloseIcon } from '../ui/CloseIcon'
import { ProductFiltersCompound } from './ProductFiltersCompound'

interface Props {
  className?: string
  category?: Product['category']
}

const { set, get } = cache('productFilters')

export const ProductFilters = ({ category }: Props) => {
  const { queryParams, setQueryParams } = useQueryParams(
    'category',
    'minPrice',
    'maxPrice',
    'brand',
    'size',
    'colors'
  )
  const { data, isLoading, isError } = useGetProductFiltersQuery(
    (category || queryParams.category) as Product['category']
  )

  const [receiveValue, setReceiveValue] = useState(false)
  const [filters, setFilters] = useState<{
    brand: string[]
    size: string[]
    price: number[]
    colors: string[]
  }>({
    brand: queryParams['brand'] ? queryParams['brand'].split(',') : [],
    size: queryParams['size'] ? queryParams['size'].split(',') : [],
    price:
      queryParams['maxPrice'] && queryParams['minPrice']
        ? [Number(queryParams['minPrice']), Number(queryParams['maxPrice'])]
        : [],
    colors: queryParams['colors'] ? queryParams['colors'].split(',') : [],
  })
  const [isOpened, setIsOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => {
    setIsOpened(false)
    document.body.style.overflow = 'auto'
  })

  useEffect(() => {
    const filtersFromCache = get()

    if (filtersFromCache && _.isEqual(filtersFromCache, filters)) {
      setIsOpened(false)
      setReceiveValue(false)
      return
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'price') {
        setQueryParams('minPrice', (value[0] as string) ?? '')
        setQueryParams('maxPrice', (value[1] as string) ?? '')
      }

      if (key === 'brand' || key === 'colors' || key === 'size') {
        setQueryParams(key, value?.join(',') ?? '')
      }
    })

    setReceiveValue(false)
    setIsOpened(false)
    set(filters)
  }, [filters])

  if (isLoading)
    return (
      <span className="rounded-lg bg-black p-2 text-white flex items-center justify-center max-w-[200px]">
        Загружаем фильтры...
      </span>
    )
  if (!data || isError) return null

  return (
    <>
      <Button
        onClick={() => {
          setIsOpened(true)
          document.body.style.overflow = 'hidden'
        }}
        className="flex items-center gap-x-1 text-gray-500 tracking-[0.01em] text-base"
        variant="clear"
      >
        Фильтры
        <img src={arrowIcon} alt="arrow" />
      </Button>
      <div
        className={cn(
          'absolute inset-0 backdrop-blur-sm w-full min-h-[100svh] z-[150] -translate-x-[2000px]  transition-transform duration-300 ease',
          { 'translate-x-0': isOpened }
        )}
      >
        <div
          ref={ref}
          className={
            'max-w-[360px] w-full h-full bg-white p-4 flex flex-col gap-y-12'
          }
        >
          <div className="flex items-center justify-between ">
            <span className="text-black text-2xl">Фильтры</span>
            <Button
              onClick={() => {
                setIsOpened(false)
                document.body.style.overflow = 'auto'
              }}
              variant="clear"
            >
              <CloseIcon />
            </Button>
          </div>

          <div className="flex flex-col gap-y-5 ">
            {Object.entries(data.data).map(([key]) => {
              //@ts-expect-error ---
              const label = PRODUCT_FILTER_LABELS[key]
              if (!label) return null

              return (
                <Collapsible
                  key={key}
                  renderTrigger={setCollapsed => (
                    <Button
                      variant="clear"
                      className="text-lg font-semibold uppercase text-[#1e1e1e] flex items-center justify-between"
                      onClick={() => setCollapsed(prev => !prev)}
                    >
                      {label}
                      <img src={arrowIcon} alt="arrow" />
                    </Button>
                  )}
                >
                  <ProductFiltersCompound filters={data.data}>
                    {key === 'size' && (
                      <ProductFiltersCompound.Size
                        initialValue={filters.size}
                        className="max-h-[100px] overflow-y-auto"
                        setValue={receiveValue}
                        onChange={size =>
                          setFilters(prev => ({
                            ...prev,
                            size: size as string[],
                          }))
                        }
                      />
                    )}

                    {key === 'min_price' && (
                      <ProductFiltersCompound.Price
                        initialValue={filters.price as [number, number]}
                        className="-translate-y-2"
                        setValue={receiveValue}
                        onChange={value =>
                          setFilters(prev => ({
                            ...prev,
                            price: value as number[],
                          }))
                        }
                      />
                    )}

                    {key === 'brands' && (
                      <ProductFiltersCompound.Brands
                        initialValue={filters.brand}
                        className="max-h-[200px] overflow-y-auto"
                        setValue={receiveValue}
                        onChange={value =>
                          setFilters(prev => ({
                            ...prev,
                            brand: value as string[],
                          }))
                        }
                      />
                    )}

                    {key === 'colors' && (
                      <ProductFiltersCompound.Colors
                        initialValue={filters.colors}
                        className=" max-h-[160px] overflow-y-auto"
                        setValue={receiveValue}
                        onChange={value =>
                          setFilters(prev => ({
                            ...prev,
                            colors: value as string[],
                          }))
                        }
                      />
                    )}
                  </ProductFiltersCompound>
                </Collapsible>
              )
            })}
          </div>
          <Button onClick={() => setReceiveValue(true)} className="mt-auto">
            Показать
          </Button>
        </div>
      </div>
    </>
  )
}
