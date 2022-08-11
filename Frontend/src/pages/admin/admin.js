import { NavbarAdmin, SidebarAdmin } from "../../containers";

const Admin = ({ children }) => {
	return (
		<>
			<NavbarAdmin />
			<SidebarAdmin />
			{children}
		</>
	);
};

export default Admin;
