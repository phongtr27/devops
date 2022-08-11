import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../components";
import { ProfileContainer } from "../../containers";
import { UserContext } from "../../context/user";
import SidebarModalAdmin from "./SidebarModalAdmin";
import useWidth from "../../hooks/useWidth";
import useComponentVisible from "../../hooks/useComponentVisible";

const NavBarAdmin = () => {
	const { pathname } = useLocation();
	const { user, setUser } = useContext(UserContext);
	const { width } = useWidth();

	const {
		isComponentVisible: showSidebarModal,
		setIsComponentVisible: setShowSidebarModal,
		ref: sideModalRef,
	} = useComponentVisible(false);

	useEffect(() => {
		setShowSidebarModal(false);
	}, [pathname, setShowSidebarModal]);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser(null);
	};

	return (
		<>
			<Navbar background_color="#794aff" color="white" sticky={true}>
				<Navbar.Logo to="/" color="white">
					NIKIDAS
				</Navbar.Logo>

				{width > 768 && (
					<ProfileContainer user={user} setUser={setUser} />
				)}

				{width <= 768 && (
					<Navbar.Button
						onClick={() => setShowSidebarModal(!showSidebarModal)}
					>
						<i className="fas fa-bars"></i>
					</Navbar.Button>
				)}
			</Navbar>

			{width <= 768 && (
				<SidebarModalAdmin
					showSidebarModal={showSidebarModal}
					setShowSidebarModal={setShowSidebarModal}
					sideModalRef={sideModalRef}
					pathname={pathname}
					onLogout={handleLogout}
				/>
			)}
		</>
	);
};

export default NavBarAdmin;
