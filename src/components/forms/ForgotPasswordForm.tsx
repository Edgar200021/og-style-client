import {useForgotPasswordMutation} from "../../store/auth/authApi.ts";
import {Button} from "../ui/Button.tsx";
import {FormEvent} from "react";
import {showError} from "../../utils/showError.ts";


interface Props {
	onSuccess: (isSuccess: boolean) => void
}
export const  ForgotPasswordForm = ({onSuccess}: Props) =>  {
	const [forgotPassword, {isLoading}] = useForgotPasswordMutation()


	const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()

		const form = e.target as HTMLFormElement,
				data = {email: form.email.value}


		try {
			await forgotPassword(data).unwrap()
			onSuccess(true)
			form.reset()
		} catch(e) {
				showError(e)
		}
	}

	return (
			<div className="bg-white shadow sm:rounded-lg">
				<div className="px-4 py-5 sm:p-6">
					<h3 className="text-base font-semibold leading-6 text-gray-900">Восстановите пароль</h3>
					<div className="mt-2 max-w-xl text-sm text-gray-500">
						<p>Укажите эл.почту для восстановления пароля </p>
					</div>
					<form onSubmit={onSubmit} className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center " >
						<div className="w-full sm:max-w-xs">
							<label htmlFor="email" className="sr-only">
								Эл.адрес
							</label>
							<input
									type="email"
									name="email"
									id="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="you@example.com"
							/>
						</div>
						<Button className='shadow-sm text-sm p-2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 min-w-18 w-18 '>
							{isLoading ? "Загрузка..." : "Восстановить"}
						</Button>
					</form>
				</div>
			</div>
	)
}
