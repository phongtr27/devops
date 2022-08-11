import {
	Container,
	Content,
	Title,
	SmallTitle,
	Text,
	Button,
	PrevButton,
	NextButton,
} from "./styles/banner.styles";

const Banner = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Banner.Content = function BannerContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>;
};

Banner.Title = function BannerTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Banner.SmallTitle = function BannerSmallTitle({ children, ...restProps }) {
	return <SmallTitle {...restProps}>{children}</SmallTitle>;
};

Banner.Text = function BannerText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Banner.Button = function BannerButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Banner.PrevButton = function BannerPrevButton({ children, ...restProps }) {
	return <PrevButton {...restProps}>{children}</PrevButton>;
};

Banner.NextButton = function BannerNextButton({ children, ...restProps }) {
	return <NextButton {...restProps}>{children}</NextButton>;
};

export default Banner;
