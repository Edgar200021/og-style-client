import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../components/Modal/Modal.tsx'
import { Notification } from '../components/Notification/Notification.tsx'
import { ForgotPasswordForm } from '../components/forms/ForgotPasswordForm.tsx'
import { cn } from '../utils/cn.ts'

interface Props {
	className?: string
}
export const ForgotPasswordPage = ({ className }: Props) => {
	const [isSuccess, setIsSuccess] = useState(false)
	const navigate = useNavigate()

	return (
		<main
			className={cn('min-h-full flex items-center justify-center', className)}
		>
			<ForgotPasswordForm onSuccess={setIsSuccess} />
			<Modal>
				<Modal.Content
					opened={isSuccess}
					renderContent={closeModal => (
						<Notification
							closeFn={() => {
								closeModal()
								navigate('/')
							}}
							text={
								'Отправка формы для восстановления пароля прошла успешно! Письмо с инструкциями по сбросу пароля было отправлено на вашу электронную почту. Пожалуйста, проверьте свою почту и следуйте инструкциям для завершения процесса сброса пароля. '
							}
							title={'Успешно отправлено письмо для восстановления пароля'}
							variant={'success'}
						/>
					)}
				/>
			</Modal>
		</main>
	)
}
