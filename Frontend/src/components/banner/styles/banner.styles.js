import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	height: 800px;
	background-image: url(${({ url }) => url && url});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;

	@media only screen and (max-width: 768px) {
		background-size: cover;
		height: 350px;
	}
`;

export const Content = styled.div`
	padding-top: 230px;
	padding-left: 60px;
	width: 40%;

	@media only screen and (max-width: 768px) {
		padding-top: 50px;
		padding-left: 30px;
	}

	@media only screen and (max-width: 480px) {
		visibility: hidden;
	}
`;

export const Title = styled.h2`
	color: #111111;
	font-size: 48px;
	font-weight: 700;
	line-height: 58px;
	margin-bottom: 30px;

	@media only screen and (max-width: 768px) {
		margin-bottom: 2px;
		font-size: 18px;
		line-height: 25px;
	}
`;

export const Text = styled.p`
	font-size: 16px;
	line-height: 28px;
	margin-bottom: 35px;

	@media only screen and (max-width: 768px) {
		font-size: 13px;
		line-height: 25px;
		margin-bottom: 25px;
	}
`;

export const SmallTitle = styled.h6`
	color: #e53637;
	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-bottom: 28px;

	@media only screen and (max-width: 768px) {
		margin-bottom: 3px;
		font-size: 11px;
	}
`;

export const Button = styled(ReactRouterLink)`
	text-decoration: none;
	border: 1px solid black;
	font-size: 13px;
	font-weight: 700;
	text-transform: uppercase;
	padding: 14px 30px;
	color: #ffffff;
	background: #000000;
	letter-spacing: 3px;

	:hover {
		opacity: 0.7;
	}

	@media only screen and (max-width: 768px) {
		padding: 7px 15px;
		font-size: 11px;
	}
`;

export const PrevButton = styled.i`
	position: absolute;
	left: 10px;
	top: 50%;
	cursor: pointer;
`;

export const NextButton = styled.i`
	position: absolute;
	right: 10px;
	top: 50%;
	cursor: pointer;
`;
