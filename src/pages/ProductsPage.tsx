import { ProductList } from '@/components/lists/ProductList'
import { ProductFilters } from '../components/ProductFilters/ProductFilters'
import { cn } from '../utils/cn'

interface Props {
  className?: string
}

export const ProductsPage = ({ className }: Props) => {
  return (
    <main className={cn('', className)}>
      <div className="container mb-[140px]">
        <div className="flex items-center justify-between mb-10">
          <ProductFilters />
        </div>
        <ProductList withPagination={true} filters={{ limit: 12 }} />
      </div>
    </main>
  )
}
