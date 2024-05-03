import { ProductFilters } from '@/store/product/types'
import { cn } from '@/utils'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import ReactSlider from 'react-slider'
import { Input } from '../ui/Input'
import './slider.css'

const Context = createContext<ProductFilters | null>(null)

interface ContextProps {
  children: ReactNode
  filters: ProductFilters
}

export const ProductFiltersCompound = ({ children, filters }: ContextProps) => {
  return <Context.Provider value={filters}>{children}</Context.Provider>
}

interface Props<T> {
  className?: string
  onChange: <T>(value: T) => void
  setValue?: boolean
  initialValue: T
}

const Brands = ({
  className,
  onChange,
  setValue = false,
  initialValue = [],
}: Props<string[]>) => {
  const { brands } = useProductFilters()
  const [brand, setBrand] = useState<string[]>(initialValue)

  useEffect(() => {
    if (!setValue || !brand.length) return
    onChange<string[]>(brand)
  }, [setValue, brand])

  return (
    <ul className={cn('flex flex-col gap-y-4 ', className)}>
      {brands.map((v: string) => (
        <li key={v}>
          <label className="flex items-center gap-x-3 cursor-pointer w-fit">
            <Input
              variant="clear"
              onChange={e =>
                setBrand(prev => {
                  const value = e.target.value
                  return prev.includes(value)
                    ? prev.filter(v => v !== value)
                    : [...prev, value]
                })
              }
              type="checkbox"
              value={v}
              defaultChecked={brand.includes(v)}
              className="!accent-dark rounded-[4px] checked:ring-0 focus:ring-0  border-solid border-[1px] border-gray-400"
            />
            <span className="text-black tracking-[0.01em]">
              {v.slice(0, 1).toUpperCase() + v.slice(1)}
            </span>
          </label>
        </li>
      ))}
    </ul>
  )
}

const Size = ({
  className,
  onChange,
  setValue = false,
  initialValue = [],
}: Props<string[]>) => {
  const { size } = useProductFilters()
  const [sizes, setSizes] = useState<string[]>(initialValue)

  useEffect(() => {
    if (!setValue || !sizes.length) return
    onChange<string[]>(sizes)
  }, [setValue])

  return (
    <div className={cn('flex flex-wrap pr-6 gap-4', className)}>
      {size.map((v: string) => (
        <label
          key={v}
          className="cursor-pointer py-[9px] px-4 rounded-xl bg-gray-200"
        >
          <Input
            defaultChecked={sizes.includes(v)}
            onChange={e => {
              const value = e.target.value
              setSizes(prev =>
                prev.includes(value)
                  ? prev.filter(v => v !== value)
                  : [...prev, value]
              )
            }}
            value={v}
            type="checkbox"
            className="hidden"
          />
          {v}
        </label>
      ))}
    </div>
  )
}
const Colors = ({
  className,
  onChange,
  setValue = false,
  initialValue,
}: Props<string[]>) => {
  const { colors } = useProductFilters()
  const [color, setColor] = useState<string[]>(initialValue)

  useEffect(() => {
    if (!setValue || !color.length) return
    onChange<string[]>(color)
  }, [setValue, color])

  return (
    <div className={cn('flex flex-col gap-y-4', className)}>
      {colors.map((v: string) => (
        <label
          key={v}
          className="flex items-center gap-x-3 cursor-pointer w-fit"
        >
          <Input
            variant="clear"
            type="checkbox"
            value={v}
            defaultChecked={color.includes(v)}
            className="!accent-dark rounded-[4px] checked:ring-0 focus:ring-0  border-solid border-[1px] border-gray-400 "
            onChange={e => {
              const value = e.target.value
              setColor(prev =>
                prev.includes(value)
                  ? prev.filter(v => v !== value)
                  : [...prev, value]
              )
            }}
          />
          <span
            className="size-[14px] rounded-[4px]"
            style={{ backgroundColor: v }}
          ></span>
        </label>
      ))}
    </div>
  )
}
const Price = ({
  className,
  onChange,
  setValue = false,
  initialValue,
}: Props<[number, number]>) => {
  const { min_price, max_price } = useProductFilters()
  const [price, setPrice] = useState(
    initialValue.length
      ? [initialValue[0], initialValue[1]]
      : [min_price, max_price]
  )

  useEffect(() => {
    if (!setValue) return

    onChange<number[]>(price)
  }, [setValue])

  return (
    <div className={cn('', className)}>
      <ReactSlider
        onChange={value => setPrice([value[0], value[1]])}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={price}
        max={max_price}
        min={min_price}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        renderThumb={props => (
          <div {...props}>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.89958 4.24999C4.67782 2.90204 5.23392 1.94152 5.73456 1.31088C6.23238 0.683782 6.58489 0.5 6.93066 0.5C7.27644 0.5 7.62895 0.683782 8.12677 1.31088C8.62741 1.94152 9.18351 2.90204 9.96175 4.25L10.8278 5.75001C11.606 7.09796 12.1598 8.05982 12.4556 8.8087C12.7498 9.55338 12.7327 9.95055 12.5598 10.25C12.3869 10.5495 12.0515 10.7628 11.2595 10.8804C10.4631 10.9987 9.35318 11 7.79669 11H6.06463C4.50815 11 3.39826 10.9987 2.60179 10.8804C1.8098 10.7628 1.47439 10.5495 1.3015 10.25C1.12861 9.95055 1.11152 9.55338 1.40569 8.8087C1.70152 8.05981 2.25531 7.09796 3.03355 5.75L3.89958 4.24999Z"
                fill="#2B2929"
                stroke="#2B2929"
              />
            </svg>
          </div>
        )}
        minDistance={10}
      />
    </div>
  )
}

ProductFiltersCompound.Brands = Brands
ProductFiltersCompound.Price = Price
ProductFiltersCompound.Size = Size
ProductFiltersCompound.Colors = Colors

const useProductFilters = () => {
  const ctx = useContext(Context)
  if (!ctx)
    throw new Error(
      'useProductFilters must be used within a ProductFiltersProvider'
    )

  return ctx
}
