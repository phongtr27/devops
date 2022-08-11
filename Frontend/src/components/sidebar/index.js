import { useState, createContext, useContext } from "react";
import {
	Container,
	ContainerFixed,
	Logo,
	Link,
	Icon,
	Text,
	LogoAlt,
	Dropdown,
	DropdownHeader,
	DropdownMenu,
} from "./styles/sidebar.styles";
import { Link as ReactRouterLink } from "react-router-dom";

const ToggleContext = createContext();

export default function Sidebar({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Sidebar.ContainerFixed = function SidebarContainerFixed({
	children,
	...restProps
}) {
	return <ContainerFixed {...restProps}>{children}</ContainerFixed>;
};

Sidebar.Logo = function SidebarLogo({ to, src, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<Logo src={src} {...restProps} />
		</ReactRouterLink>
	);
};

Sidebar.LogoAlt = function SidebarLogoAlt({ to, src, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<LogoAlt src={src} {...restProps} />
		</ReactRouterLink>
	);
};

Sidebar.Icon = function SidebarIcon({ ...restProps }) {
	return <Icon {...restProps} />;
};

Sidebar.Text = function SidebarText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Sidebar.Link = function SidebarLink({ to, children, ...restProps }) {
	return (
		<Link to={to} {...restProps}>
			{children}
		</Link>
	);
};

Sidebar.Dropdown = function SidebarDropdown({
	defaultToggleShow,
	children,
	...restProps
}) {
	const [toggleShow, setToggleShow] = useState(defaultToggleShow || false);

	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Dropdown {...restProps}>{children}</Dropdown>
		</ToggleContext.Provider>
	);
};

Sidebar.DropdownHeader = function SidebarDropdownHeader({
	children,
	...restProps
}) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);
	return (
		<DropdownHeader
			{...restProps}
			onClick={() => setToggleShow(!toggleShow)}
		>
			{children}
			{toggleShow ? (
				<span style={{ marginLeft: "10px" }}>
					<i className="fas fa-angle-down"></i>
				</span>
			) : (
				<span style={{ marginLeft: "10px" }}>
					<i className="fas fa-angle-right"></i>
				</span>
			)}
		</DropdownHeader>
	);
};

Sidebar.DropdownMenu = function SidebarDropdownMenu({
	children,
	...restProps
}) {
	const { toggleShow } = useContext(ToggleContext);
	return (
		<DropdownMenu className={toggleShow ? "open" : "closed"} {...restProps}>
			{children}
		</DropdownMenu>
	);
};
