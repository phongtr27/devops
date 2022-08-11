import {
	Container,
	Grid,
	List,
	Item,
	Name,
	Image,
	Title,
	Text,
	SubText,
	Wrapper,
	Tag,
	Button,
	NextButton,
	PrevButton,
} from "./styles/card.styles";

const Card = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Card.Grid = function CardGrid({ children, ...restProps }) {
	return <Grid {...restProps}>{children}</Grid>;
};

Card.Image = function CardImage({ ...restProps }) {
	return <Image {...restProps} />;
};

Card.Title = function CardTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Card.Text = function CardText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Card.SubText = function CardSubText({ children, ...restProps }) {
	return <SubText {...restProps}>{children}</SubText>;
};

Card.List = function CardList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Card.Wrapper = function CardWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Card.Item = function CardItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Card.Name = function CardName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

Card.Tag = function CardTag({ children, ...restProps }) {
	return <Tag {...restProps}>{children}</Tag>;
};

Card.Button = function CardButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Card.PrevButton = function CardPrevButton({ children, ...restProps }) {
	return <PrevButton {...restProps}>{children}</PrevButton>;
};

Card.NextButton = function CardNextButton({ children, ...restProps }) {
	return <NextButton {...restProps}>{children}</NextButton>;
};

export default Card;
