import {useState} from "react";
import {useResetPasswordMutation} from "../../store/auth/authApi.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {resetPasswordSchema, ResetPasswordSchema} from "../../schemas/resetPasswordSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {showError} from "../../utils/showError.ts";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {Button} from "../ui/Button.tsx";
import {Collapsible} from "../Collapsible/Collapsible.tsx";


interface Props {
	email: string
}

export const ResetPasswordForm = ({email}: Props ) => {
	const {register, handleSubmit, formState: {errors}} = useForm<ResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema)
	})
	const [resetPassword, {isLoading}] = useResetPasswordMutation()
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<ResetPasswordSchema> = async(data) => {
		try {
			await resetPassword({email, password: data.password}).unwrap()
			toast.success('Сброс пароля прошла успешно')
			navigate('/auth/sign-in')
		} catch (e) {
			showError(e)
		}
	}

	return (
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Сброс пароля
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form onSubmit={handleSubmit(onSubmit)}>
						<fieldset className="space-y-6 p-0 b-0 m-0" disabled={isLoading}>
						<div>
							<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
								Пароль
							</label>
							<div className="mt-2">
								<input
										{...register('password')}
										id="password"
										type="password"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<Collapsible collapsed={!!errors.password?.message}>
								<span className='text-red'>{errors.password?.message}</span>
							</Collapsible>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="passwordConfirm" className="block text-sm font-medium leading-6 text-gray-900">
									Повторите пароль
								</label>
							</div>
							<div className="mt-2">
								<input
										id="passwordConfirm"
										{...register('passwordConfirm')}
										type="password"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<Collapsible collapsed={!!errors.passwordConfirm?.message}>
								<span className='text-red'>{errors.passwordConfirm?.message}</span>
							</Collapsible>
						</div>

						<div>
							<Button className='shadow-sm text-sm p-3  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '>
								{isLoading ? "Загрузка..." : "Сброс пароля"}
							</Button>
						</div>
						</fieldset>
					</form>

				</div>
			</div>
	)
}