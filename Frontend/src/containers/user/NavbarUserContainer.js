import { Navbar } from "../../components";
import { ProfileContainer } from "../../containers";
import {
	LOGIN,
	HOME,
	SHOP,
	CONTACT,
	CART,
	CHECKOUT,
} from "../../constants/routes";

const NavbarUserContainer = ({
	pathname,
	cart,
	user,
	setUser,
	setShowSearchModal,
	setShowSidebarModal,
	width,
}) => {
	return (
		<Navbar side_padding="60px">
			<Navbar.Logo to={HOME}>NIKIDAS</Navbar.Logo>

			<Navbar.Wrapper width="30%">
				<Navbar.Link to={HOME} active={pathname === HOME ? 1 : 0}>
					Home
				</Navbar.Link>

				<Navbar.Link to={SHOP} active={pathname.includes(SHOP) ? 1 : 0}>
					Shop
				</Navbar.Link>

				<Navbar.Link to={CONTACT} active={pathname === CONTACT ? 1 : 0}>
					Contact Us
				</Navbar.Link>

				<Navbar.Link
					to={CHECKOUT}
					active={pathname === CHECKOUT ? 1 : 0}
				>
					Checkout
				</Navbar.Link>
			</Navbar.Wrapper>

			<Navbar.Wrapper width="126px">
				<Navbar.Link to="#" onClick={() => setShowSearchModal(true)}>
					<i className="fas fa-search"></i>
				</Navbar.Link>

				<Navbar.Link to={CART}>
					<i className="fas fa-shopping-bag"></i>
					<Navbar.Tag>{cart.length}</Navbar.Tag>
				</Navbar.Link>

				{user ? (
					<ProfileContainer user={user} setUser={setUser} />
				) : (
					<Navbar.Link to={LOGIN}>Log In</Navbar.Link>
				)}
			</Navbar.Wrapper>

			{width <= 768 && (
				<Navbar.Button onClick={() => setShowSidebarModal(true)}>
					<i className="fas fa-bars"></i>
				</Navbar.Button>
			)}
		</Navbar>
	);
};

export default NavbarUserContainer;
