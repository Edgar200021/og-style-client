import {Navigate, useSearchParams} from "react-router-dom";
import {ResetPasswordForm} from "../components/forms/ResetPasswordForm.tsx";


const ResetPasswordPage = () => {
	const [searchParams] = useSearchParams(),
			email = searchParams.get('email')

	if (!email) return <Navigate to={"/"}/>


	return <ResetPasswordForm email={email}/>
};

export default ResetPasswordPage;