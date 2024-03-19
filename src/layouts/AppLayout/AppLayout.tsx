import {Header} from "../../components/Header/Header.tsx";
import {Outlet} from "react-router";

export const AppLayout = () => {
	return (
			<>
				<Header/>
				<Outlet/>
			</>
	);
};

