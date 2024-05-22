import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { cn } from '../../utils/cn.ts'

import { useOnClickOutside } from 'usehooks-ts'
import arrowIcon from '../../assets/icons/arrow.svg'
import sprites from '../../assets/icons/sprite.svg'
import { CATEGORIES, NAVIGATION } from '../../constants/header.ts'
import { Search } from '../Search/Search.tsx'

interface Props {
  className?: string
  isVisible?: boolean
}
export const MobileMenu = ({ className, isVisible }: Props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const ref = useRef(null)

  const closeMenu = () => {
    setIsMenuVisible(false)
    document.body.style.overflow = 'auto'
  }

  useOnClickOutside(ref, closeMenu, 'mousedown')

  return (
    <>
      <button
        onClick={() => {
          setIsMenuVisible(!isMenuVisible)
          document.body.style.overflow = isMenuVisible ? 'auto' : 'hidden'
        }}
        className={cn(
          'md:hidden h-4 w-6 cursor-pointer flex items-center justify-center relative before:absolute before:top-0 before:left-0 before:bg-black before:content-[""] before:w-full before:h-[2px]  after:absolute after:bottom-0 after:left-0 after:bg-black after:content-[""] after:w-full after:h-[2px] before:transition-all before:duration-300 before:ease after:transition-all after:duration-300 after:ease',
          {
            'before:rotate-45 before:top-[50%] before:-translate-y-[50%] after:-rotate-45 after:top-[50%] after:-translate-y-[50%] ':
              isVisible ?? isMenuVisible,
          }
        )}
      >
        <span
          className={cn(
            'bg-black w-full h-[2px] transition-opacity duration-300 ease',
            { 'opacity-0': isVisible ?? isMenuVisible }
          )}
        ></span>
      </button>

      <div
        className={cn(
          'md:hidden w-full z-[100] backdrop-blur-2xl absolute h-[calc(100svh-80px)] transition-all duration-300 ease top-[80px] -left-[100%]',
          { 'left-0': isVisible ?? isMenuVisible }
        )}
      >
        <div
          ref={ref}
          className={cn(
            'max-w-[360px] w-full h-full  flex flex-col justify-between ',
            className
          )}
        >
          <div className="px-4 bg-white h-full">
            <div className="pb-3 mb-6 border-b-[1px] border-b-gray-300 text-dark text-sm flex items-center justify-between gap-x-2">
              <a
                className="flex items-center gap-x-[6px] justify-between "
                href="mailto:order@ogstyle.ru"
              >
                order@ogstyle.ru
                <img src={arrowIcon} width={10} height={5} alt="" />
              </a>
              <a
                className="flex items-center gap-x-[6px] justify-between "
                href="tel:+79020416339"
              >
                +7 (902) 041-63-39
                <img src={arrowIcon} width={10} height={5} alt="" />
              </a>
            </div>
            <div className="flex items-center justify-between text-dark text-sm mb-8">
              <span>WhatsApp</span>
              <span>Telegram</span>
            </div>

            <Search
              onActionEnd={closeMenu}
              withButton={false}
              className="mb-[62px]"
            />

            <ul className=" max-h-[380px] overflow-y-auto flex flex-col gap-y-4 text-dark [&>li:not(:last-child)]:border-b-[1px] [&>li:not(:last-child)]:border-gray-300 b [&>li:not(:last-child)]:pb-[10px]">
              {CATEGORIES.map(({ label, to }) => (
                <li key={label}>
                  <Link className="w-full block" to={to}>
                    {label}
                  </Link>
                </li>
              ))}
              {NAVIGATION.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 px-4 pb-6 flex items-center justify-center bg-dark  rounded-t-lg ">
            <ul className="flex gap-x-5 items-center font-light text-xs tracking-[.02em] [&>li>a]:flex [&>li>a]:flex-col [&>li>a]:items-center [&>li>a]:gap-y-1 [&>li>a]:transition-colors [&>li>a]:durtion-300 [&>li>a]:ease  ">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? '[&>svg]:stroke-yellow-100 text-yellow-100'
                      : 'text-gray-400'
                  }
                  to={'/favorite'}
                >
                  <svg className="stroke-gray-400" width={18} height={16}>
                    <use xlinkHref={`${sprites}#hearth`} />
                  </svg>
                  Избранное
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? '[&>svg]:stroke-yellow-100 text-yellow-100'
                      : 'text-gray-400'
                  }
                  to={'/cart'}
                >
                  <svg className="stroke-gray-400 " width={18} height={16}>
                    <use xlinkHref={`${sprites}#bug`} />
                  </svg>
                  Корзина
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? '[&>svg]:text-yellow-100 text-yellow-100 '
                      : 'text-gray-400'
                  }
                  to={'/'}
                >
                  <svg width={18} height={16}>
                    <use xlinkHref={`${sprites}#house`} />
                  </svg>
                  Главная
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
