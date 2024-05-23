import { Outlet } from 'react-router'
//import { useAppSelector } from '../../store/store.ts'
//import { getUser } from '../../store/user/userSlice.ts'
import { cn } from '../../utils/cn.ts'

interface Props {
  className?: string
}

export const AdminLayout = ({ className }: Props) => {
  //  const user = useAppSelector(getUser)

  return (
    <div className={cn('flex gap-x-10', className)}>
      <div className="py-20">
        <Outlet />
      </div>
    </div>
  )
}
