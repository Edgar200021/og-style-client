import { Link } from 'react-router-dom'
import logoIcon from '../../assets/icons/logo.svg'
import { cn } from '../../utils/cn.ts'
interface Props {
  className?: string
}
export const Logo = ({ className }: Props) => {
  return (
    <Link
      className={cn(
        'w-[154px] h-[22px] lg:w-[187px] lg:h-[27px] xl:w-[197px] xl:h-[31px]',
        className
      )}
      to={'/'}
    >
      <img
        src={logoIcon}
        alt="OG-style"
        className="w-full h-full object-contain -translate-x-3"
      />
    </Link>
  )
}

export default Logo
