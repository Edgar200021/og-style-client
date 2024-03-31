import {cn} from "../utils/cn.ts";
import {Hero} from "../components/Hero/Hero.tsx";

interface Props {
	className?: string
}


export const MainPage = ({className}: Props) => {
	return <main className={cn('', className)}>
		<div className="container">
		<Hero/>
		</div>
	</main>
}