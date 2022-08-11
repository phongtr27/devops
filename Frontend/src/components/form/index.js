import React from "react";
import {
	ContainerBG,
	SmallContainer,
	BigContainer,
	MidContainer,
	Text,
	TextArea,
	Base,
	Label,
	Input,
	ColorInput,
	Button,
	SmallButton,
	Link,
	Title,
	LabelFileInput,
	Image,
	Select,
	Option,
	Grid,
} from "./styles/form.styles";

export default function Form({ children, ...restProps }) {
	return <ContainerBG {...restProps}>{children}</ContainerBG>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Form.TextArea = function FormTextArea({ children, ...restProps }) {
	return <TextArea {...restProps}>{children}</TextArea>;
};

Form.SmallContainer = function FormSmallContainer({ children, ...restProps }) {
	return <SmallContainer {...restProps}>{children}</SmallContainer>;
};

Form.BigContainer = function FormBigContainer({ children, ...restProps }) {
	return <BigContainer {...restProps}>{children}</BigContainer>;
};

Form.MidContainer = function FormMidContainer({ children, ...restProps }) {
	return <MidContainer {...restProps}>{children}</MidContainer>;
};

Form.Base = function FormBase({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

Form.Label = function FormLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

Form.FileInput = function FormFileInput({ children, ...restProps }) {
	return (
		<LabelFileInput>
			<Input
				{...restProps}
				style={{ marginBottom: 0, border: "1px solid #e1e1e1" }}
			/>
			{children}
		</LabelFileInput>
	);
};

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

Form.ColorInput = function FormColorInput({ children, ...restProps }) {
	return <ColorInput {...restProps}>{children}</ColorInput>;
};

Form.Button = function FormButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Form.SmallButton = function FormSmallButton({ children, ...restProps }) {
	return <SmallButton {...restProps}>{children}</SmallButton>;
};

Form.Image = function FormImage({ ...restProps }) {
	return <Image {...restProps} />;
};

Form.Link = function FormLink({ to, children, ...restProps }) {
	return (
		<Link to={to} {...restProps}>
			{children}
		</Link>
	);
};

Form.Select = function FormSelect({ children, ...restProps }) {
	return <Select {...restProps}>{children}</Select>;
};

Form.Option = function FormOption({ children, ...restProps }) {
	return <Option {...restProps}>{children}</Option>;
};

Form.Grid = function FormGrid({ children, ...restProps }) {
	return <Grid {...restProps}>{children}</Grid>;
};
