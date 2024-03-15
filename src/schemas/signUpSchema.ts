import {z} from "zod";

export const signUpSchema = z.object({
	email: z.string().email("Введите корректный эл.адрес"),
	password: z.string().min(8, "Минимальная длина паролья 8 символов"),
	passwordConfirm: z.string()
}).refine(d => d.password == d.passwordConfirm, {
	path: ['passwordConfirm'],
	message: 'Пароли не совпадают',
})

export type SignUpSchema = z.infer<typeof signUpSchema>