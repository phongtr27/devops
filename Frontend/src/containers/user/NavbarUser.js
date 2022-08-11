import { useContext, useEffect } from "react";
import {
	NavbarUserContainer,
	SearchModal,
	SidebarModalUser,
} from "../../containers";
import { UserContext } from "../../context/user";
import { CartContext } from "../../context/cart";
import { useLocation } from "react-router-dom";
import useWidth from "../../hooks/useWidth";
import useComponentVisible from "../../hooks/useComponentVisible";

const NavbarUser = () => {
	const { pathname } = useLocation();
	const { user, setUser } = useContext(UserContext);
	const { cart } = useContext(CartContext);
	const { width } = useWidth();

	const {
		isComponentVisible: showSearchModal,
		setIsComponentVisible: setShowSearchModal,
		ref: modalRef,
	} = useComponentVisible(false);

	const {
		isComponentVisible: showSidebarModal,
		setIsComponentVisible: setShowSidebarModal,
		ref: sideModalRef,
	} = useComponentVisible(false);

	useEffect(() => {
		setShowSearchModal(false);
		setShowSidebarModal(false);
	}, [pathname, setShowSearchModal, setShowSidebarModal]);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser(null);
	};

	return (
		<div>
			<NavbarUserContainer
				pathname={pathname}
				cart={cart}
				user={user}
				setUser={setUser}
				setShowSearchModal={setShowSearchModal}
				setShowSidebarModal={setShowSidebarModal}
				width={width}
			/>

			<SearchModal
				showSearchModal={showSearchModal}
				setShowSearchModal={setShowSearchModal}
				modalRef={modalRef}
			/>

			{width <= 768 && (
				<SidebarModalUser
					pathname={pathname}
					cart={cart}
					user={user}
					setShowSearchModal={setShowSearchModal}
					showSidebarModal={showSidebarModal}
					setShowSidebarModal={setShowSidebarModal}
					sideModalRef={sideModalRef}
					onLogout={handleLogout}
				/>
			)}
		</div>
	);
};

export default NavbarUser;
