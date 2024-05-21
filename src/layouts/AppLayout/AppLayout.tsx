import { Outlet } from 'react-router'
import { Footer } from '../../components/Footer/Footer.tsx'
import { Header } from '../../components/Header/Header.tsx'

export const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100svh]">
      <Header className="mb-9" />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
