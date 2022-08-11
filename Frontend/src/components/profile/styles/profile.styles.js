import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	position: relative;
`;

export const Dropdown = styled.div`
	z-index: 999;
	border: 1px solid white;
	box-shadow: 1px 0 20px rgb(0 0 0 / 20%);
	background-color: white;
	position: absolute;
	top: 43px;
	right: -26px;
	min-width: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;

	&.closed {
		visibility: hidden;
		height: 0;
	}
	&.open {
	}
`;

export const Icon = styled.i`
	:first-of-type {
		margin-right: 5px;
		width: 20px;
	}
`;

export const Name = styled.p`
	cursor: pointer;
`;

export const Text = styled.p`
	font-size: 12px;
	margin-top: 5px;
	margin-bottom: 5px;
`;

export const Link = styled(ReactRouterLink)`
	text-decoration: none;
	color: black;
	display: flex;
	align-items: center;
	padding: 5px;
	:hover {
		background-color: #e0e2e8;
	}
`;

export const Button = styled.div`
	color: black;
	display: flex;
	align-items: center;
	padding: 5px;
	:hover {
		background-color: #e0e2e8;
	}
`;
