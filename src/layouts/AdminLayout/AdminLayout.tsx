import {Outlet} from "react-router";
import {cn} from "../../utils/cn.ts";
import {useAppSelector} from "../../store/store.ts";
import {getUser} from "../../store/user/userSlice.ts";

interface Props {
  className?: string
}

export const AdminLayout = ({className}: Props) => {

  const user = useAppSelector(getUser);
  console.log(user)

  return (
      <div className={cn('flex gap-x-10', className)}>
        <div className="py-20">
          <Outlet/>
        </div>
      </div>
  );
};
