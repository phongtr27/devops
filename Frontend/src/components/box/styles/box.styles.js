import styled from "styled-components/macro";

export const Container = styled.div`
	padding: 20px;
	background-color: #f3f2ee;
	min-width: 350px;

	@media only screen and (max-width: 480px) {
		min-width: auto;
	}
`;

export const Title = styled.h6`
	font-size: 16px;
	margin-top: 0;
	margin-bottom: 20px;

	@media only screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const Text = styled.p`
	margin-top: 0;
	margin-bottom: 10px;
	${({ color }) => color && { color: color }}
	${({ fontWeight }) => fontWeight && { fontWeight: fontWeight }}
`;

export const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 100px auto;
	grid-column-gap: 15px;
	margin-bottom: 20px;
`;

export const Button = styled.button`
	display: block;
	margin-top: 40px;
	width: 100%;
	padding: 15px 20px;
	background-color: black;
	color: white;
	font-weight: 700;
	letter-spacing: 4px;
	border: 1px solid black;
	cursor: pointer;

	:hover {
		transition: 0.5s;
		background-color: #f6aa8d;
		color: white;
		border: 1px solid #f6aa8d;
	}

	:disabled {
		background-color: #d7d2d2;
		border: 1px solid #d7d2d2;
	}
`;
