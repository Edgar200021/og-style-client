import { useQueryParams } from '../../hooks/useQueryParams'
import { useGetProductFiltersQuery } from '../../store/product/productApi'
import { Product } from '../../store/product/types'
import { Button } from '../ui/Button'

import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import arrowIcon from '../../assets/icons/arrow.svg'
import { PRODUCT_FILTER_LABELS } from '../../constants/productFilters'
import { cn } from '../../utils/cn'
import { Collapsible } from '../Collapsible/Collapsible'
import { CloseIcon } from '../ui/CloseIcon'
import { Input } from '../ui/Input'

interface Props {
  className?: string
  category?: Product['category']
}

export const ProductFilters = ({ className, category }: Props) => {
  const { queryParams, setQueryParams } = useQueryParams('category')
  const { data, isLoading, isError } = useGetProductFiltersQuery(
    (category || queryParams.category) as Product['category']
  )
  const [isOpened, setIsOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setIsOpened(false))

  if (!data) return null

  return (
    <>
      <Button
        onClick={() => setIsOpened(!isOpened)}
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
            <Button onClick={() => setIsOpened(false)} variant="clear">
              <CloseIcon />
            </Button>
          </div>

          <div className="flex flex-col gap-y-5">
            {Object.entries(data.data).map(([key, value]) => {
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
                  {key === 'size' && (
                    <div className="flex flex-wrap pr-6 gap-4 max-h-[100px] overflow-y-auto">
                      {value.map((v: string) => (
                        <label
                          key={v}
                          className="cursor-pointer py-[9px] px-4 rounded-xl bg-gray-200"
                        >
                          <Input type="checkbox" className="hidden" />
                          {v}
                        </label>
                      ))}
                    </div>
                  )}
                </Collapsible>
              )
            })}
          </div>
          <Button className="mt-auto">Показать</Button>
        </div>
      </div>
    </>
  )
}
