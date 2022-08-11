import {
	Container,
	Base,
	Title,
	Head,
	Body,
	Row,
	Header,
	Data,
	Text,
	Grid,
	Image,
	Button,
	BigButton,
	ReactRouterLink,
} from "./styles/table.styles";

const Table = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Table.Base = function TableBase({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

Table.Title = function TableTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Table.Head = function TableHead({ children, ...restProps }) {
	return <Head {...restProps}>{children}</Head>;
};

Table.Body = function TableBody({ children, ...restProps }) {
	return <Body {...restProps}>{children}</Body>;
};

Table.Row = function TableRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};

Table.Header = function TableHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};

Table.Data = function TableData({ children, ...restProps }) {
	return <Data {...restProps}>{children}</Data>;
};

Table.Text = function TableText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Table.Grid = function TableGrid({ children, ...restProps }) {
	return <Grid {...restProps}>{children}</Grid>;
};

Table.Image = function TableImage({ ...restProps }) {
	return <Image {...restProps} />;
};

Table.Button = function TableButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Table.BigButton = function TableBigButton({ children, ...restProps }) {
	return <BigButton {...restProps}>{children}</BigButton>;
};

Table.Link = function TableLink({ children, ...restProps }) {
	return <ReactRouterLink {...restProps}>{children}</ReactRouterLink>;
};

export default Table;
