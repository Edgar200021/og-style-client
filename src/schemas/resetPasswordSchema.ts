import {z} from "zod";

export const resetPasswordSchema = z.object({
	password: z.string().min(8, 'Минимальная длина пароля 8'),
	passwordConfirm: z.string()
}).refine(obj => obj.password === obj.passwordConfirm, {path: ["passwordConfirm"],message: "Пароли не совпадают"})

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>