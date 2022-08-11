import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const ContainerFixed = styled.div`
	box-shadow: 1px 0 20px rgb(0 0 0 / 8%);
	position: fixed;
	left: 0;
	height: 100%;
	width: 15%;

	@media only screen and (max-width: 1280px) {
		width: 17%;
	}

	@media only screen and (max-width: 1024px) {
		width: 20%;
	}

	@media only screen and (max-width: 768px) {
		visibility: hidden;
		width: 0;
		height: 0;
	}
`;

export const Container = styled.div`
	padding-top: 60px;
	padding-left: 30px;
	width: 15%;
	height: 100%;

	@media only screen and (max-width: 1280px) {
		padding-left: 0;
		width: 17%;
	}

	@media only screen and (max-width: 1024px) {
		padding-left: 0;
		width: 20%;
	}

	@media only screen and (max-width: 768px) {
		visibility: hidden;
		width: 0;
		height: 0;
	}
`;

export const Logo = styled.img`
	width: 100%;
	margin: 20px auto;
`;

export const LogoAlt = styled.img``;

export const Icon = styled.i`
	margin-right: 10px;
`;

export const Text = styled.p`
	${({ paddingLeft }) => paddingLeft && { "padding-left": paddingLeft }}
	${({ active }) => active && { backgroundColor: "#eeeeee" }}
	${({ active }) => !active && `${Icon} {visibility: hidden}`}
	position: relative;

	${Icon} {
		position: absolute;
		right: 0;
	}
`;

export const Link = styled(ReactRouterLink)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: ${({ active, hovercolor }) => (active ? hovercolor : "#797f91")};
	padding-left: 30px;
	&:hover {
		color: ${({ hovercolor }) => hovercolor};
	}
`;

export const Dropdown = styled.div`
	padding-left: 30px;
	cursor: pointer;
`;

export const DropdownHeader = styled.div`
	display: flex;
	align-items: center;
	color: ${({ active }) => (active ? "#794aff" : "#797f91")};

	&:hover {
		color: ${({ hovercolor }) => hovercolor};
	}
`;

export const DropdownMenu = styled.div`
	color: #797f91;
	&.closed {
		visibility: hidden;
		height: 0;
	}
	&.open {
	}

	${Text} {
		padding-top: 5px;
		padding-bottom: 5px;

		width: 150px;

		@media only screen and (min-width: 768px) {
			:hover {
				${({ hoverbox }) => hoverbox && { backgroundColor: "#eeeeee" }}
			}
		}

		@media only screen and (max-width: 422px) {
			width: auto;
		}
	}
`;
