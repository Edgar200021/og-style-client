import {cn} from "../../utils/cn.ts";

import successNotificationIcon from '../../assets/icons/success-notification.svg'
import errprNotificationIcon from '../../assets/icons/error-notification.svg'
import {Button} from "../ui/Button.tsx";
import {CloseIcon} from "../ui/CloseIcon.tsx";

interface Props {
	className?: string
	closeFn: () => void
	variant: 'success' | 'error'
	title: string
	text: string
}

export const Notification = ({className, closeFn, variant, title, text}: Props) => {


	return <article className={cn('text-center max-w-[480px]', className)}>
				<div className="flex justify-end mb-[5px]">
					<Button className='outline-none shadow-none' onClick={closeFn} variant='clear'>
						<CloseIcon className={'md:w-4 md:h-4'}/>
					</Button>
				</div>

				<div className='flex justify-center'>
					<img className='w-[142px] h-[108px] object-cover mb-[50px] md:mb-[38px] md:w-[114px] md:h-[87px] ' src={variant === 'success' ? successNotificationIcon : errprNotificationIcon} alt="icon"/>
				</div>
			<span className="block uppercase max-xsm:text-xl text-2xl font-medium tracking-[0.01em] mb-2 md:font-semibold md:mb-3">{title}</span>
		<p className='text-dark mb-24 max-xsm:text-sm sm:mb-6'>{text}</p>
		<Button className='font-medium py-3 tracking-[0.01em] md:font-semibold' onClick={closeFn}>Закрыть</Button>
	</article>
}