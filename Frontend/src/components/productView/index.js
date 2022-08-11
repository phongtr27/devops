import {
	Container,
	Wrapper,
	Name,
	Title,
	Text,
	ImagePreview,
	Image,
	Option,
	Input,
	Button,
	SubText,
	PrevButton,
	NextButton,
} from "./styles/productView.styles";

const ProductView = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

ProductView.Wrapper = function ProductViewWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

ProductView.Option = function ProductViewOption({ children, ...restProps }) {
	return <Option {...restProps}>{children}</Option>;
};

ProductView.Input = function ProductViewInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

ProductView.Name = function ProductViewName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

ProductView.Title = function ProductViewTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

ProductView.Text = function ProductViewText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

ProductView.SubText = function ProductViewSubText({ children, ...restProps }) {
	return <SubText {...restProps}>{children}</SubText>;
};

ProductView.Button = function ProductViewButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

ProductView.PrevButton = function ProductViewPrevButton({
	children,
	...restProps
}) {
	return <PrevButton {...restProps}>{children}</PrevButton>;
};

ProductView.NextButton = function ProductViewNextButton({
	children,
	...restProps
}) {
	return <NextButton {...restProps}>{children}</NextButton>;
};

ProductView.Image = function ProductViewImage({ ...restProps }) {
	return <Image {...restProps} />;
};

ProductView.ImagePreview = function ProductViewImagePreview({ ...restProps }) {
	return <ImagePreview {...restProps} />;
};

export default ProductView;
