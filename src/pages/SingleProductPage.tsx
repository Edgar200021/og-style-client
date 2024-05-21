import { SingleProduct } from '@/components/SingleProduct/SingleProduct'
import { MainLoader } from '@/components/ui/loaders/MainLoader'
import { useGetProductQuery } from '@/store/product/productApi'
import { cn } from '@/utils'
import { useParams } from 'react-router'
import {ProductList} from "@/components/lists/ProductList.tsx";
import {HonestMark} from "@/components/HonstMark/HonestMark.tsx";

interface Props {
  className?: string
}

export const SingleProductPage = ({ className }: Props) => {
  const { id } = useParams()
  const { data, isLoading } = useGetProductQuery(Number(id))

  if (isLoading) return <MainLoader className="my-10" />
  if (!data) return null

  return (
    <main className={cn('', className)}>
      <SingleProduct className='mb-[120px]' {...data.data}/>
      <div className="container">
        <ProductList className='mb-40' title='Вам может понравиться' withSlider={true} filters={{brand: data.data.brand}}/>
        <HonestMark className='mb-40'/>
      </div>
    </main>
  )
}
