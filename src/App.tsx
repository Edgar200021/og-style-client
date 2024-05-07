import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/router.tsx'
import { FAVORITE_PRODUCTS_KEY } from './constants/localStorage.ts'
import { addMultiple } from './store/product/productSlice.ts'
import { Product } from './store/product/types.ts'
import { useAppDispatch } from './store/store.ts'
import { localStorageApi } from './utils/localStorage.ts'

function App() {
  const dispatch = useAppDispatch()
  const { get } = localStorageApi()

  useEffect(() => {
    const favoriteProducts =
      get<
        Pick<
          Product,
          'id' | 'discount' | 'discountedPrice' | 'images' | 'name' | 'price'
        >[]
      >(FAVORITE_PRODUCTS_KEY) || []

    console.log(favoriteProducts)

    dispatch(addMultiple(favoriteProducts))
  }, [])

  return <RouterProvider router={router} />
}

export default App
