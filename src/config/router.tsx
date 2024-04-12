import {createBrowserRouter} from "react-router-dom";
import {SignUpForm} from "../components/forms/SignUpForm.tsx";
import {SignInForm} from "../components/forms/SignInForm.tsx";
import {ForgotPasswordForm} from "../components/forms/ForgotPasswordForm.tsx";
import {ForgotPasswordPage} from "../pages/ForgotPasswordPage.tsx";
import ResetPasswordPage from "../pages/ResetPasswordPage.tsx";
import {AppLayout} from "../layouts/AppLayout/AppLayout.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {AdminLayout} from "../layouts/AdminLayout/AdminLayout.tsx";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout/>,
		children: [{
			index: true,
			element: <MainPage/>
		}]
	},

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
		path: "/admin",
		element: <AdminLayout/>
	}
])
