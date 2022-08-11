import {
	Container,
	Title,
	Text,
	Button,
	Grid,
	Image,
} from "./styles/box.styles";

const Box = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Box.Title = function BoxTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Box.Text = function BoxText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Box.Button = function BoxButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Box.Image = function BoxImage({ ...restProps }) {
	return <Image {...restProps} />;
};

Box.Grid = function BoxGrid({ children, ...restProps }) {
	return <Grid {...restProps}>{children}</Grid>;
};

export default Box;
