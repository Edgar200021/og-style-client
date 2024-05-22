import { Search } from '@/components/Search/Search'
import { ProductList } from '@/components/lists/ProductList'
import { cn } from '@/utils'

interface Props {
  className?: string
}

export const SearchPage = ({ className }: Props) => {
  return (
    <main className={cn('', className)}>
      <div className="container">
        <h1 className="font-medium text-2xl uppercase text-center tracking-[0.01em] md:font-normal md:text-[32px] lg:text-[48px] mb-6 md:mb-8 lg:mb-12">
          ПОИСК ПО САЙТУ
        </h1>
        <Search className="mb-4 md:mb-20" />
        <ProductList title='Результаты поиска' withPagination={true} />
      </div>
    </main>
  )
}
