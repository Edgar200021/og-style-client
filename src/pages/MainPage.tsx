import { Brands } from '../components/Brands/Brands.tsx'
import { Hero } from '../components/Hero/Hero.tsx'
import { HonestMark } from '../components/HonstMark/HonestMark.tsx'
import { Sell } from '../components/Sell/Sell.tsx'
import { ProductList } from '../components/lists/ProductList.tsx'
import { Button } from '../components/ui/Button.tsx'
import { SELL } from '../constants/sell.ts'
import { Product } from '../store/product/types.ts'
import { cn } from '../utils/cn.ts'

import carIcon from '../assets/icons/car.svg'
import { Mailing } from '../components/Mailing/Mailing.tsx'

interface Props {
  className?: string
}

export const MainPage = ({ className }: Props) => {
  return (
    <main className={cn('', className)}>
      <div className="container ">
        <Hero className="mb-8" />
        <Brands className="mb-20 md:mb-40 lg:mb-[180px]" />
        <ProductList
          className="mb-20 md:mb-[140px] lg:mb-40"
          title="Популярные"
          withSlider={true}
        />
        <HonestMark className="mb-20 md:mb-[140px] lg:mb-40" />
        <ul className="flex flex-col gap-y-3 min-[490px]:gap-5  min-[490px]:grid min-[490px]:grid-cols-2 min-[800px]:grid-cols-4 min-[800px]:grid-rows-[repeat(5,110px)] lg:grid-rows-[repeat(5,160px)] mb-20 md:mb-[140px] lg:mb-40">
          {SELL.map((sell, i) => (
            <li
              className={cn({
                'min-[800px]:col-span-2 min-[800px]:row-span-3': i === 0,
                'min-[800px]:col-start-3 min-[800px]:row-span-2': i === 1,
                'min-[800px]:col-start-4 min-[800px]:row-span-2': i === 2,
                'min-[800px]:col-start-3 min-[800px]:row-span-3 min-[800px]:col-span-full':
                  i === 3,
              })}
              key={sell.title}
            >
              <Sell
                className="min-[490px]:h-full"
                {...sell}
                category={sell.category as Product['category']}
              />
            </li>
          ))}
          <li className="flex items-center gap-x-20  px-4 py-6 bg-yellow-100 rounded-xl md:px-6 md:py-[28px] lg:px-8 lg:py-[78px] col-span-2 min-[800px]:row-span-2  ">
            <div className="flex flex-col">
              <span className="mb-4 font-semibold text-xl md:mb-3  md:text-2xl tracking-[0.01em] lg:text-[32px] ">
                Доставка по городу
              </span>
              <p className="text-sm tracking-[0.01em] md:text-base min-[490px]:mb-6 lg:mb-8">
                Стандартная доставка от
                <span className="font-semibold">
                  4 дней - 500р
                  <br />
                </span>
                Доставка в постомат или пункт выдачи заказов
              </p>
              <Button
                className="hidden min-[490px]:inline-block py-3 rounded-xl font-medium tracking-[0.01em] w-[134px] bg-white"
                variant="clear"
              >
                Выбрать
              </Button>
            </div>
            <img
              src={carIcon}
              alt="Car"
              className="hidden min-[520px]:block min-[800px]:hidden xl:block"
            />
          </li>
        </ul>
        <Mailing />
      </div>
    </main>
  )
}
