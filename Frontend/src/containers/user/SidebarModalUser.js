import {
	LOGIN,
	HOME,
	SHOP,
	CONTACT,
	CART,
	CHECKOUT,
	ADMIN,
} from "../../constants/routes";
import { Modal, Sidebar } from "../../components";

const SidebarModalUser = ({
	pathname,
	cart,
	user,
	setShowSearchModal,
	showSidebarModal,
	setShowSidebarModal,
	sideModalRef,
	onLogout,
}) => {
	return (
		<Modal.SideModal
			showModal={showSidebarModal}
			setShowModal={setShowSidebarModal}
			sideModalRef={sideModalRef}
		>
			{user ? (
				<>
					<Sidebar.Link to="#">
						<Sidebar.Text>{`Hello, ${user.name}`}</Sidebar.Text>
					</Sidebar.Link>

					{user.isAdmin && (
						<Sidebar.Link to={ADMIN} hovercolor="#e53637">
							<Sidebar.Icon className="fas fa-unlock" />
							<Sidebar.Text>Dashboard</Sidebar.Text>
						</Sidebar.Link>
					)}

					<Sidebar.Link
						to="#"
						hovercolor="#e53637"
						onClick={onLogout}
					>
						<Sidebar.Icon className="fas fa-sign-out" />
						<Sidebar.Text>Log Out</Sidebar.Text>
					</Sidebar.Link>
				</>
			) : (
				<Sidebar.Link
					to={LOGIN}
					active={pathname === LOGIN ? 1 : 0}
					hovercolor="#e53637"
				>
					<Sidebar.Icon className="fas fa-sign-in" />
					<Sidebar.Text>Log In</Sidebar.Text>
				</Sidebar.Link>
			)}

			<Sidebar.Link
				to={HOME}
				active={pathname === HOME ? 1 : 0}
				hovercolor="#e53637"
			>
				<Sidebar.Icon className="fas fa-home-alt" />
				<Sidebar.Text>Home</Sidebar.Text>
			</Sidebar.Link>

			<Sidebar.Link
				to={SHOP}
				active={pathname === SHOP ? 1 : 0}
				hovercolor="#e53637"
			>
				<Sidebar.Icon className="far fa-shopping-cart" />
				<Sidebar.Text>Shop</Sidebar.Text>
			</Sidebar.Link>

			<Sidebar.Link
				to={CONTACT}
				active={pathname === CONTACT ? 1 : 0}
				hovercolor="#e53637"
			>
				<Sidebar.Icon className="fas fa-address-book" />
				<Sidebar.Text>Contact Us</Sidebar.Text>
			</Sidebar.Link>

			<Sidebar.Link
				to={CHECKOUT}
				active={pathname === CHECKOUT ? 1 : 0}
				hovercolor="#e53637"
			>
				<Sidebar.Icon className="fas fa-credit-card-blank" />
				<Sidebar.Text>Checkout</Sidebar.Text>
			</Sidebar.Link>

			<Sidebar.Link
				to={CART}
				active={pathname === CART ? 1 : 0}
				hovercolor="#e53637"
			>
				<Sidebar.Icon className="fas fa-shopping-bag" />
				<Sidebar.Text>{`Cart (${cart?.length})`}</Sidebar.Text>
			</Sidebar.Link>

			<Sidebar.Link
				to="#"
				hovercolor="#e53637"
				onClick={() => setShowSearchModal(true)}
			>
				<Sidebar.Icon className="fas fa-search" />
				<Sidebar.Text>Search</Sidebar.Text>
			</Sidebar.Link>
		</Modal.SideModal>
	);
};

export default SidebarModalUser;
