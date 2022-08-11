import {
	Container,
	Item,
	Logo,
	Title,
	Text,
	Image,
	Link,
} from "./styles/footer.styles";

const Footer = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Footer.Item = function FooterItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Footer.Logo = function FooterLogo({ children, ...restProps }) {
	return <Logo {...restProps}>{children}</Logo>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Footer.Image = function FooterImage({ ...restProps }) {
	return <Image {...restProps} />;
};

export default Footer;
