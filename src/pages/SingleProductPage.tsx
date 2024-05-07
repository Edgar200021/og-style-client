import { SingleProduct } from '@/components/SingleProduct/SingleProduct'
import { MainLoader } from '@/components/ui/loaders/MainLoader'
import { useGetProductQuery } from '@/store/product/productApi'
import { cn } from '@/utils'
import { useParams } from 'react-router'

interface Props {
  className?: string
}

export const SingleProductPage = ({ className }: Props) => {
  const { id } = useParams()
  const { data, isLoading } = useGetProductQuery(Number(id))

  if (isLoading) return <MainLoader className="my-10" />
  if (!data) return null
  console.log(data)

  return (
    <main className={cn('', className)}>
      <SingleProduct {...data.data}/>
    </main>
  )
}
