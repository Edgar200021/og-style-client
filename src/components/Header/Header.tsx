import {Link} from "react-router-dom";


import {cn} from "../../utils/cn.ts";

import Logo from "../ui/Logo.tsx";
import {MobileMenu} from "../MobileMenu/MobileMenu.tsx";
import {Button} from "../ui/Button.tsx";

import {CATEGORIES, FEEDBACK, NAVIGATION} from "../../constants/header.ts";

import searchIcon from '../../assets/icons/searchIcon.svg'
import sprites from "../../assets/icons/sprite.svg";
interface Props {
	className?: string
}
export const Header = ({className}: Props) => {

	return (
			<header className={cn('', className)}>
				<div className="container pt-6">
					<div className='flex items-center justify-between gap-x-4 sm:gap-x-10 mb-6'>
						<Logo className='md:hidden'/>
						<MobileMenu  />

						<div className='max-md:hidden flex items-center gap-x-4 w-full '>
							<Logo/>
							<ul className='flex gap-x-3 text-gray-500 text-xs'>
								{NAVIGATION.map(({to, label}) => {
									return <li className='whitespace-nowrap' key={label}>
										<Link to={to}>{label}</Link>
									</li>
								})}
							</ul>
							<ul className="ml-auto  flex items-center gap-2 ">
								{FEEDBACK.map(icon => <li className='size-8 flex items-center justify-center rounded-full border-[1px] border-gray-400 cursor-pointer' key={icon}>
									<img src={icon} className='size-4' alt={"icon"}/>
								</li>)}
							</ul>
						</div>
					</div>
					<div className="items-center justify-between hidden md:flex ">
						<ul className="gap-x-4 flex lg:gap-x-10 ">
							{CATEGORIES.map(({label, to}) => <li key={label}><Link to={to}>{label}</Link></li>)}
						</ul>

						<div className="flex gap-x-5 0">
						<Button variant='clear'>
							<img className='size-5' src={searchIcon} alt="Search"/>
						</Button>
							<Link to={'/favorites'} className="text-white">
								<svg className='stroke-black' width={20} height={20}>
									<use xlinkHref={`${sprites}#hearth`}/>
								</svg>
							</Link>
							<Link to={'/cart'}>
								<svg className='stroke-black' width={20} height={20}>
									<use xlinkHref={`${sprites}#bug`}/>
								</svg>
							</Link>
						</div>
					</div>

				</div>
			</header>
	);
};

