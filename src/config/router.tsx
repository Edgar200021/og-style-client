import { CartPage } from '@/pages/CartPage.tsx'
import { GithubAuthorizePage } from '@/pages/GithubAuthorizePage.tsx'
import { SingleProductPage } from '@/pages/SingleProductPage.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { SignInForm } from '../components/forms/SignInForm.tsx'
import { SignUpForm } from '../components/forms/SignUpForm.tsx'
import { AdminLayout } from '../layouts/AdminLayout/AdminLayout.tsx'
import { AppLayout } from '../layouts/AppLayout/AppLayout.tsx'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage.tsx'
import { MainPage } from '../pages/MainPage.tsx'
import { ProductsPage } from '../pages/ProductsPage.tsx'
import ResetPasswordPage from '../pages/ResetPasswordPage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id',
        element: <SingleProductPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },

  {
    path: '/auth',
    children: [
      {
        element: <SignUpForm />,
        path: 'sign-up',
      },
      {
        element: <SignInForm />,
        path: 'sign-in',
      },
      {
        element: <ForgotPasswordPage />,
        path: 'forgot-password',
      },
      {
        element: <ResetPasswordPage />,
        path: 'reset-password',
      },
      {
        element: <GithubAuthorizePage />,
        path: 'github',
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
  },
])
