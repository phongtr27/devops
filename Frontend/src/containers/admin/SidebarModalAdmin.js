import { Modal, Sidebar } from "../../components";
import {
	ADMIN,
	ADMIN_CATEGORY,
	ADMIN_SUB_CATEGORY,
	ADMIN_PRODUCT,
	ADMIN_ORDER,
	HOME,
} from "../../constants/routes";

const SidebarModalAdmin = ({
	pathname,
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
			style={{ marginTop: "60px" }}
		>
			<Sidebar.Link
				to={HOME}
				active={pathname === HOME ? 1 : 0}
				hovercolor="#794aff"
			>
				<Sidebar.Icon className="fas fa-home-alt" />
				<Sidebar.Text>Home</Sidebar.Text>
			</Sidebar.Link>

			<Sidebar.Link
				to={ADMIN}
				active={pathname === ADMIN ? 1 : 0}
				hovercolor="#794aff"
			>
				<Sidebar.Icon className="fas fa-chart-line" />
				<Sidebar.Text>Dashboard</Sidebar.Text>
			</Sidebar.Link>

			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader
					active={pathname.includes("category") ? 1 : 0}
					hovercolor="#794aff"
				>
					<Sidebar.Icon className="fas fa-th-large" />
					<Sidebar.Text>Categories</Sidebar.Text>
				</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu>
					<Sidebar.Link
						to={ADMIN_CATEGORY}
						active={pathname === ADMIN_CATEGORY ? 1 : 0}
						hovercolor="#794aff"
					>
						<Sidebar.Text>All Categories</Sidebar.Text>
					</Sidebar.Link>

					<Sidebar.Link
						to={`${ADMIN_CATEGORY}/new`}
						active={pathname === `${ADMIN_CATEGORY}/new` ? 1 : 0}
						hovercolor="#794aff"
					>
						<Sidebar.Text>New Category</Sidebar.Text>
					</Sidebar.Link>

					<Sidebar.Link
						to={ADMIN_SUB_CATEGORY}
						active={pathname === ADMIN_SUB_CATEGORY ? 1 : 0}
						hovercolor="#794aff"
					>
						<Sidebar.Text>All Sub-Category</Sidebar.Text>
					</Sidebar.Link>

					<Sidebar.Link
						to={`${ADMIN_SUB_CATEGORY}/new`}
						active={
							pathname === `${ADMIN_SUB_CATEGORY}/new` ? 1 : 0
						}
						hovercolor="#794aff"
					>
						<Sidebar.Text>New Sub-Category</Sidebar.Text>
					</Sidebar.Link>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader
					active={pathname.includes("/product") ? 1 : 0}
					hovercolor="#794aff"
				>
					<Sidebar.Icon className="far fa-shopping-cart" />
					<Sidebar.Text>Products</Sidebar.Text>
				</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu>
					<Sidebar.Link
						to={ADMIN_PRODUCT}
						active={pathname === ADMIN_PRODUCT ? 1 : 0}
						hovercolor="#794aff"
					>
						<Sidebar.Text>All Products</Sidebar.Text>
					</Sidebar.Link>

					<Sidebar.Link
						to={`${ADMIN_PRODUCT}/new`}
						active={pathname === `${ADMIN_PRODUCT}/new` ? 1 : 0}
						hovercolor="#794aff"
					>
						<Sidebar.Text>New Product</Sidebar.Text>
					</Sidebar.Link>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Link
				to={ADMIN_ORDER}
				active={pathname.includes("order") ? 1 : 0}
				hovercolor="#794aff"
			>
				<Sidebar.Icon className="fas fa-bags-shopping" />
				<Sidebar.Text>Orders</Sidebar.Text>
			</Sidebar.Link>

			<Sidebar.Link to="#" hovercolor="#794aff" onClick={onLogout}>
				<Sidebar.Icon className="fas fa-sign-out" />
				<Sidebar.Text>Log Out</Sidebar.Text>
			</Sidebar.Link>
		</Modal.SideModal>
	);
};

export default SidebarModalAdmin;
