import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	${({ sticky }) => sticky && `z-index: 999; position: sticky; top: 0; `}
	width: 100%;
	height: 60px;
	color: ${({ color }) => (color ? color : "black")};
	background-color: ${({ background_color }) =>
		background_color ? background_color : "white"};
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding-left: ${({ side_padding }) =>
		side_padding ? side_padding : "30px"};
	padding-right: ${({ side_padding }) =>
		side_padding ? side_padding : "30px"};

	@media only screen and (max-width: 1280px) {
		padding-left: 30px;
		padding-right: 30px;
	}
`;

export const Logo = styled(ReactRouterLink)`
	text-decoration: none;
	color: ${({ color }) => (color ? color : "black")};
	font-weight: 700;
	font-size: 28px;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: ${({ width }) => width ?? width};

	@media only screen and (max-width: 768px) {
		visibility: hidden;
	}
`;

export const Link = styled(ReactRouterLink)`
	text-decoration: none;
	color: black;
	position: relative;

	${({ active }) =>
		active &&
		`:after {
		position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: #e53637;
    content: "";
	}`}
`;

export const Tag = styled.span`
	display: inline-block;
	font-size: 11px;
	font-weight: 700;
	line-height: 1;
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;
	padding: 3px 5px;
	background-color: #ffc107;
	border-radius: 50%;
	position: absolute;
	bottom: -9px;
	left: 7px;
`;

export const Button = styled.div`
	cursor: pointer;
`;
