import {createBrowserRouter} from "react-router-dom";
import {SignUpForm} from "../components/forms/SignUpForm.tsx";
import {SignInForm} from "../components/forms/SignInForm.tsx";
import {ForgotPasswordForm} from "../components/forms/ForgotPasswordForm.tsx";
import {ForgotPasswordPage} from "../pages/ForgotPasswordPage.tsx";
import ResetPasswordPage from "../pages/ResetPasswordPage.tsx";
import {AppLayout} from "../layouts/AppLayout/AppLayout.tsx";


export const router = createBrowserRouter([
	{
		path: "/auth",
		children: [
			{
				element: <SignUpForm/>,
				path: "sign-up"
			},
			{
				element: <SignInForm/>,
				path: "sign-in"
			},
			{
				element: <ForgotPasswordPage/>,
				path: "forgot-password"
			},
			{
				element: <ResetPasswordPage/>,
				path: "reset-password"
			}
		]
	},
	{
		path: "/",
		element: <AppLayout/>
	}

])
