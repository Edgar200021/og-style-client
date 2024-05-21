import { EmptyCart } from '@/components/EmptyCart/EmptyCart'
import { PlaceAnOrder } from '@/components/PlaceAnOrder/PlaceAnOrder'
import { CartProductList } from '@/components/lists/CartProductList'
import { PageLoader } from '@/components/ui/loaders/PageLoader'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useGetCartProductsQuery } from '@/store/cart/cartApi'
import { cn } from '@/utils'

interface Props {
  className?: string
}

export const CartPage = ({ className }: Props) => {
  const { queryParams } = useQueryParams('page', 'limit')
  const { data, isLoading, isError } = useGetCartProductsQuery({
    limit: 8,
    page: queryParams.page ? Number(queryParams.page) : 1,
  })

  if (isLoading) return <PageLoader />
  if (isError || !data) return <h1>Что-то пошло не так</h1>

  const productsWithDiscount = data.data.products.filter(
    p => !p.discountedPrice
  ).length

  return (
    <main className={cn('py-20', className)}>
      <div className="container">
        {!data.data.products.length && <EmptyCart />}
        {data.data.products.length && (
          <>
            <h1 className="font-medium text-2xl mb-12  md:text-[32px] lg:text-[40px] lg:mb-20">
              Корзина
            </h1>
            <div className="flex flex-col gap-y-28 items-start md:flex-row md:gap-y-0 md:gap-x-5">
              <CartProductList
                className="w-full"
                cartProducts={data.data.products}
                totalPages={data.data.totalPages}
              />
              <PlaceAnOrder
                totalDiscountedPrice={data.data.totalDiscountedPrice}
                totalPrice={data.data.totalPrice}
                productsWithoutDiscount={productsWithDiscount}
              />
            </div>
          </>
        )}
      </div>
    </main>
  )
}
