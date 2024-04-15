import { Link } from 'react-router-dom'
import { CATEGORIES, FEEDBACK, NAVIGATION } from '../../constants/header'
import { cn } from '../../utils/cn'
import Logo from '../ui/Logo'

interface Props {
  className?: string
}

export const Footer = ({ className }: Props) => {
  return (
    <footer className={cn('text-dark', className)}>
      <div className="container">
        <div className="py-6 md:py-[33px] lg:py-[55px] border-y-[1px] border-y-gray-300 flex flex-col gap-y-6 min-[700px]:flex-row min-[700px]:gap-x-4 min-[700px]:gap-y-0 md:gap-x-20 xl:gap-x-32 2xl:gap-x-52 mb-4 lg:mb-6">
          <div className="max-w-[252px] xl:max-w-[320px]">
            <Logo className="mb-4 block [&>img]:translate-x-0" />
            <p className="tracking-[0.01em] leading-[160%] mb-4 xl:mb-6">
              OGstyle - магазин по продаже оригинальной одежды и обуви мировых
              брендов
            </p>
            <div className="flex flex-col gap-y-3 md:gap-y-4">
              <a
                className="font-medium tracking-[0.01em] "
                href="tel:+79020416339"
              >
                +7 (902) 041-63-39
              </a>
              <span className="font-medium ">order@ogstyle.ru</span>
              <ul className=" flex items-center gap-2 ">
                {FEEDBACK.slice(0, 2).map(icon => (
                  <li
                    className="size-8 flex items-center justify-center rounded-full border-[1px] border-gray-400 cursor-pointer"
                    key={icon}
                  >
                    <img src={icon} className="size-4" alt={'icon'} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="h-px border-y-gray-300 md:hidden" />
          <div className="flex flex-col gap-y-5 min-[500px]:flex-row min-[500px]:gap-y-0 min-[500px]:gap-x-32">
            <ul className="gap-y-5 xsm:gap-y-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-36 content-start">
              {CATEGORIES.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
            <ul className="gap-y-5 xsm:gap-y-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-36 content-start ">
              {NAVIGATION.map(({ to, label }) => {
                return (
                  <li className="whitespace-nowrap" key={label}>
                    <Link to={to}>{label}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="text-sm md:text-base tracking-[0.01em] flex flex-col justify-center items-center gap-y-4 pb-4 min-[700px]:flex-row min-[700px]:justify-between">
          <span>© OGstyle 2023</span>
          <span>Политика конфиденциальности</span>
          <span>Разработано ООО “Edgar"</span>
        </div>
      </div>
    </footer>
  )
}
