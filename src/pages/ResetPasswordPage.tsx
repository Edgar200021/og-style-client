import {useSearchParams} from "react-router-dom";
import {ResetPasswordForm} from "../components/forms/ResetPasswordForm.tsx";


const ResetPasswordPage = () => {
	const [searchParams] = useSearchParams()


	return <ResetPasswordForm email={searchParams.get('email')!}/>
};

export default ResetPasswordPage;