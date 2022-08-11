import {
	Container,
	Logo,
	Wrapper,
	Link,
	Tag,
	Button,
} from "./styles/navbar.styles";

const Navbar = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = function NavbarLogo({ children, ...restProps }) {
	return <Logo {...restProps}>{children}</Logo>;
};

Navbar.Wrapper = function NavbarWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Navbar.Link = function NavbarLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Navbar.Tag = function NavbarTag({ children, ...restProps }) {
	return <Tag {...restProps}>{children}</Tag>;
};

Navbar.Button = function NavbarButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

export default Navbar;
