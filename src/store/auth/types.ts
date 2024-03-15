import {User} from "../user/types.ts";
import {BaseApiResponse} from "../../types/types.ts";

export interface SignUpRequst {
	email: string
	password: string
}

export interface SignInRequest {
	email: string
	password: string
}

export interface ResetPasswordRequest {
	email: string
	password: string
}

export interface SignInResponse extends BaseApiResponse<User>{
}
