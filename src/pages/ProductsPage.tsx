import { ProductFilters } from '../components/ProductFilters/ProductFilters'
import { cn } from '../utils/cn'

interface Props {
  className?: string
}

export const ProductsPage = ({ className }: Props) => {
  return (
    <main className={cn('', className)}>
      <div className="container">
        <ProductFilters />
      </div>
    </main>
  )
}
