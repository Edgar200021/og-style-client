import { cn } from '../../utils/cn'

import smart from '../../assets/img/smart.png'

interface Props {
  className?: string
}

export const HonestMark = ({ className }: Props) => {
  return (
    <article
      className={cn(
        'bg-grad-yellow pt-6 md:pt-8 lg:pt-[50px] rounded-xl max-xsm:h-[500px] overflow-hidden',
        className
      )}
    >
      <div className="max-w-5xl mx-auto flex items-center gap-x-[46px]  px-6 max-[640px]:flex-col-reverse">
        <img className="max-md:translate-y-20 max-xsm:translate-y-10" src={smart} alt="Smartphone" />
        <p className="text-black tracking-[0.01em] text-base md:text-2xl ">
          Совершая покупки в OGstyle,
          <span className="font-semibold">
            вы приобретаете оригинальный и сертифицированный товар.
          </span>
          Вся продукция промаркирована в соответствии с законом и может быть
          идентифицирована в системе Честный ЗНАК.
        </p>
      </div>
    </article>
  )
}
