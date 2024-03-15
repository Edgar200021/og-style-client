import {
	createContext,
	Dispatch,
	Fragment,
	ReactElement,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState
} from "react";
import { Dialog, Transition } from '@headlessui/react'
import {cn} from "../../utils/cn.ts";


const ModalContext = createContext<{isOpened: boolean, setIsOpened:Dispatch<SetStateAction<boolean>>} | null>(null)

interface Props {
	children: ReactNode
}
export const Modal = ({children}: Props) =>{
	const [isOpened, setIsOpened] = useState(false)


	return <ModalContext.Provider value={{isOpened, setIsOpened}}>{children}</ModalContext.Provider>
}


interface OpenProps {
	renderTrigger: (fn: () => void) => ReactElement
}
const Open = ({renderTrigger}: OpenProps) => {
	const {setIsOpened} = useModal()
	const openModal = () => {
		setIsOpened(true)
	}

	return renderTrigger(openModal)
}

interface ContentProps {
	renderContent: (fn: () => void) => ReactElement
	className?: string
	opened?: boolean
}

const Content = ({renderContent, className, opened}: ContentProps) => {
	const {isOpened, setIsOpened} = useModal()


	useEffect(() => {
		if (opened === undefined) return
		setIsOpened(opened)
	}, [opened]);
	const closeModal = () => {
		setIsOpened(false)
	}

	return (
			<Transition.Root show={isOpened} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setIsOpened}>
					<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-[#000000]  bg-opacity-50 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center  sm:p-0">
							<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
									enterTo="opacity-100 translate-y-0 sm:scale-100"
									leave="ease-in duration-200"
									leaveFrom="opacity-100 translate-y-0 sm:scale-100"
									leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className={cn("relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all max-w-fit w-full sm:p-6", className)}>
									{renderContent(closeModal)}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
	)
}

Modal.Open = Open
Modal.Content = Content


function useModal() {
	const context = useContext(ModalContext)
	if (!context) throw new Error("Ошибка: Попытка доступа к контексту за пределами провайдера.")
	return context
}