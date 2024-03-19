import {cn} from "../../utils/cn.ts";


import logoIcon from '../../assets/icons/logo.svg'
import {useState} from "react";
import Logo from "../ui/Logo.tsx";
import {MobileMenu} from "../MobileMenu/MobileMenu.tsx";
interface Props {
	className?: string
}
export const Header = ({className}: Props) => {

	return (
			<header className={cn('', className)}>
				<div className="container">
					<div className='flex items-center justify-between gap-x-4 pt-6'>
						<Logo/>
					<MobileMenu />
					</div>

				</div>
			</header>
	);
};

