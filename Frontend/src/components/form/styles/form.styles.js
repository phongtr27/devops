import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const ContainerBG = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-image: ${({ bg }) => (bg ? `url(${bg})` : null)};
	background-size: cover;

	@media only screen and (max-width: 1280px) {
		background-size: auto;
	}
`;

export const SmallContainer = styled.div`
	width: 20%;
	height: 355px;
	margin: auto;
	border-color: none;
	padding: 40px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media only screen and (max-width: 1024px) {
		width: 23%;
	}

	@media only screen and (max-width: 768px) {
		width: 30%;
	}

	@media only screen and (max-width: 480px) {
		width: 60%;
	}
`;

export const BigContainer = styled.div`
	padding: 30px 30px 0px 30px;
	border: 1px solid white;
`;

export const MidContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px;
`;

export const Title = styled.h2`
	margin: 0;
	margin-bottom: 30px;
	font-weight: 500;
`;

export const Text = styled.p`
	text-align: center;
	margin: 0;
`;

export const TextArea = styled.textarea`
	padding: 10px 5px;
	outline-color: #c3820a;
	box-sizing: border-box;
	width: 100%;
	height: 100px;
	margin-bottom: 20px;
	border: 1px solid #e1e1e1;
`;

export const Base = styled.form`
	width: ${({ width }) => (width ? width : "auto")};
	display: flex;
	flex-direction: column;
	padding-bottom: 30px;
`;

export const Label = styled.label`
	margin-bottom: 10px;
`;

export const Input = styled.input`
	padding: 10px 5px;
	outline-color: #c3820a;
	margin-bottom: 20px;
	border: 1px solid #e1e1e1;
`;

export const ColorInput = styled.input`
	height: 40px;
	width: 100%;
	margin-bottom: 20px;
	border: 1px solid #e1e1e1;
`;

export const Button = styled.button`
	border-radius: ${({ border_radius }) =>
		border_radius ? border_radius : "5px"};
	padding: 10px 5px;
	border-width: 0;
	width: ${(width) => (width ? width : "100%")};
	background-color: ${({ background_color }) =>
		background_color ? background_color : "#03a9f3"};
	color: #ffffff;
	font-weight: 700;
	font-size: 17px;
	cursor: pointer;

	&:hover {
		background-color: ${({ hover_color }) =>
			hover_color ? hover_color : "#0682b9"};
	}

	&:disabled {
		background-color: #a3bbc6;
	}
`;

export const Link = styled(ReactRouterLink)``;

export const LabelFileInput = styled.label`
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
`;

export const SmallButton = styled.span`
	margin-top: 5px;
	text-align: center;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	margin: 5px;
`;

export const Select = styled.select`
	padding: 10px 5px;
	outline-color: #c3820a;
	margin-bottom: 20px;
	height: 40px;
	border: 1px solid #e1e1e1;
`;

export const Option = styled.option``;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-column-gap: 10px;
`;
