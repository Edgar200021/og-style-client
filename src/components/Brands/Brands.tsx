import {BRANDS} from "../../constants/brands.ts";
import {cn} from "../../utils/cn.ts";

interface Props{
  className?: string
}

export const Brands = ({className}: Props) => {
  return (
      <div className={cn('flex items-center justify-between pb-5 overflow-x-scroll snap-mandatory snap-x gap-x-[32px] md:gap-x-[55px] lg:gap-x-20', className)}>
        {BRANDS.map(brandIcon => <img alt='Brand' className='snap-center w-20 h-10 md:w-30 md:h-[56px] lg:w-[132px] lg:h-[90px]' src={brandIcon} key={brandIcon}/>)}
      </div>
  );
};



