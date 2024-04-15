import { ComponentProps } from 'react'
import { cn } from '../../utils/cn.ts'

import searchIcon from '../../assets/icons/searchIcon.svg'

const variants = {
  primary: '',
  search:
    'placeholder:text-sm placeholder:text-gray-300 border-0 p-0 m-0 border-transparent focus:border-transparent focus:ring-0',
  transparent: 'bg-white/0 rounded-xl border-[1px] border-gray-200 w-full placeholder:text-white focus:outline-0 focus:ring-0 px-6',
}
interface Props extends ComponentProps<'input'> {
  variant?: keyof typeof variants
}
export const Input = ({
  className,
  variant = 'primary',
  ...otherProps
}: Props) => {
  if (variant === 'search')
    return (
      <label
        className={cn(
          'py-2 px-3 flex items-center gap-x-4 rounded-lg border-[1px] border-gray-300 text-black',
          className
        )}
      >
        <img src={searchIcon} width={18} height={18} alt="search" />
        <input
          className={variants[variant]}
          placeholder="Поиск"
          {...otherProps}
        />
      </label>
    )

  return <input className={cn(variants[variant], className)} {...otherProps} />
}
