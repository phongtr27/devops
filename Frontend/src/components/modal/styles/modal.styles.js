import styled, { keyframes } from "styled-components/macro";
import { slideInLeft, zoomIn } from "react-animations";

export const Overlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	${({ topPosition }) =>
		topPosition && { "justify-content": "flex-start", paddingTop: "20px" }}
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.27);
`;

const ZoomIn = keyframes`${zoomIn}`;

export const Inner = styled.div`
	border: 1px solid transparent;
	background-color: white;
	width: 400px;
	min-height: 200px;
	padding: 30px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	animation: 0.2s ${ZoomIn};

	${({ displayNormal }) => displayNormal && { justifyContent: "flex-start" }}

	@media only screen and (max-width: 480px) {
		width: 300px;
	}
`;

export const Close = styled.button`
	position: absolute;
	right: 5px;
	top: 5px;
	width: 22px;
	height: 22px;
	opacity: 0.3;
	background-color: transparent;
	border: 0;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

export const Button = styled.button`
	background-color: ${({ bg }) => (bg ? bg : null)};
	width: 115px;
	height: 45px;
	text-transform: uppercase;
	font-weight: bold;
	border: none;
	color: ${({ bg }) => (bg ? "white" : "black")};
	font-size: 16px;
	height: 45px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 0;
	&:hover {
		transform: scale(1.05);
	}
`;

export const GroupButton = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SideOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.27);
`;

const SlideInLeft = keyframes`${slideInLeft}`;

export const SideInner = styled.div`
	height: 100vh;
	background-color: white;
	width: 35%;
	overflow-x: scroll;
	padding-top: 20px;
	padding-bottom: 20px;
	animation: 0.2s ${SlideInLeft};
	@media only screen and (max-width: 480px) {
		width: 50%;
	}

	@media only screen and (max-width: 422px) {
		padding-right: 20px;
	}
`;
