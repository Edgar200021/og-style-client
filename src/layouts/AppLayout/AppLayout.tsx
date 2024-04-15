import { Outlet } from 'react-router'
import { Footer } from '../../components/Footer/Footer.tsx'
import { Header } from '../../components/Header/Header.tsx'

export const AppLayout = () => {
  return (
    <>
      <Header className="mb-9" />
      <Outlet />
      <Footer />
    </>
  )
}
