import jwt_decode from "jwt-decode";

export const getUser = () => {
	const token = localStorage.getItem("token");
	return token ? jwt_decode(token) : null;
};
