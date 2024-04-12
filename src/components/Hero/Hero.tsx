import {cn} from "../../utils/cn.ts";
import {Button} from "../ui/Button.tsx";

import sneaker from '../../assets/img/form-bg.png'
import {Fragment, useEffect, useState} from "react";

interface Props {
	className?: string
}

const SLIDE_LENGTH = 5

export const Hero = ({className}: Props) => {
	const [currSlide, setCurrSlide] = useState(0)


	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrSlide(prev => prev === SLIDE_LENGTH - 1 ? 0 : prev + 1)
		}, 4000)

		return () => clearInterval(timerId)
	}, []);


	return <section className={cn('p-6 md:p-12 lg:p-20 min-h-[422px] bg-grad1 rounded-xl relative', className)}>
		<div className="flex overflow-hidden">

			{Array.from({length: SLIDE_LENGTH}, (_, i) => <div style={{transform: `translateX(-${currSlide * 100}%)`}} key={i} className="flex gap-x-10 items-center h-full min-w-full transition-transform duration-300 ease ">

						<div className='flex flex-col grow h-full  '>
							<h1 className='text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-white font-bold '>Новая коллекция
								осень-зима!</h1>
							<p className='text-sm md:text-xl lg:text-2xl text-white tracking-[.01em] mb-6 max-w-[300px] md:max-w-[500px]'>Ощути
								легкость и комфорт с каждым
								шагом в новейших кроссовках Nike! Совершенство технологий и стильный дизайн для твоей неустанной
								энергии.
								Выбирай Nike - и покоряй вершины своих целей. Поторопись, эксклюзивные предложения
								уже в ожидании!</p>
							<Button className='max-xsm:max-w-full max-w-[220px] py-3 mt-auto ' variant='secondary'>Подробнее</Button>
						</div>
						<div className='max-[550px]:hidden block'>
							<img src={sneaker} alt="Sneeaker"/>
						</div>
					</div>
			)}


		</div>

		<div className="flex items-center absolute bottom-4 left-[50%] -translate-x-[50%] gap-x-2">
		{Array.from({length: SLIDE_LENGTH}, (_, i) => <span className={cn('size-2 md:size-3 lg:size-4 block bg-transparent border-[2px] border-white rounded-full transition-colors duration-300 ease', {'bg-white': currSlide === i})} key={i}>
		</span>)}
		</div>
	</section>
}