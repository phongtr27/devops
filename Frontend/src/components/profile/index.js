import { createContext, useContext } from "react";
import useComponentVisible from "../../hooks/useComponentVisible";
import {
	Container,
	Dropdown,
	Name,
	Button,
	Icon,
	Text,
	Link,
} from "./styles/profile.styles";

const ToggleContext = createContext();

const Profile = ({ children, ...restProps }) => {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	return (
		<ToggleContext.Provider
			value={{ ref, isComponentVisible, setIsComponentVisible }}
		>
			<Container {...restProps}>{children}</Container>
		</ToggleContext.Provider>
	);
};

Profile.Dropdown = function ProfileDropdown({ children, ...restProps }) {
	const { isComponentVisible, ref } = useContext(ToggleContext);

	return (
		<Dropdown
			className={isComponentVisible ? "open" : "closed"}
			{...restProps}
			ref={ref}
		>
			{children}
		</Dropdown>
	);
};

Profile.Name = function ProfileName({ children, ...restProps }) {
	const { isComponentVisible, setIsComponentVisible } =
		useContext(ToggleContext);

	return (
		<Name
			{...restProps}
			onClick={() => setIsComponentVisible(!isComponentVisible)}
		>
			{children}
		</Name>
	);
};

Profile.Text = function ProfileText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Profile.Button = function ProfileButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Profile.Icon = function ProfileIcon({ children, ...restProps }) {
	return <Icon {...restProps}>{children}</Icon>;
};

Profile.Link = function ProfileLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

export default Profile;
