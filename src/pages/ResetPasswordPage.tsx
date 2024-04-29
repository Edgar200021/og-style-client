import {Navigate, useSearchParams} from "react-router-dom";
import {ResetPasswordForm} from "../components/forms/ResetPasswordForm.tsx";


const ResetPasswordPage = () => {
	const [searchParams] = useSearchParams(),
			email = searchParams.get('email'),
			token = searchParams.get('token')

	if (!email || !token) return <Navigate to={"/"}/>


	return <ResetPasswordForm token={token} email={email}/>
};

export default ResetPasswordPage;