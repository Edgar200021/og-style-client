import { Brands } from '../components/Brands/Brands.tsx'
import { Hero } from '../components/Hero/Hero.tsx'
import { ProductList } from '../components/lists/ProductList.tsx'
import { cn } from '../utils/cn.ts'

interface Props {
  className?: string
}

export const MainPage = ({ className }: Props) => {
  return (
    <main className={cn('', className)}>
      <div className="container ">
        <Hero className="mb-8" />
        <Brands className="mb-20 md:mb-40 lg:mb-[180px]" />
        <ProductList title="Популярные" withSlider={true} />
      </div>
    </main>
  )
}
