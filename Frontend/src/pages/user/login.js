import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HOME, SIGNUP } from "../../constants/routes";
import { Form } from "../../components";
import { UserContext } from "../../context/user";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import Config from "../../config.json";

const LogIn = () => {
	const navigate = useNavigate();

	const { setUser } = useContext(UserContext);
	const [continueAsAdmin, setContinueAsAdmin] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (continueAsAdmin) {
			setEmail("Phong@gmail.com");
			setPassword("123456");
		} else {
			setEmail("");
			setPassword("");
		}
	}, [continueAsAdmin]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`${Config.REACT_APP_API_REST}/api/auth`,
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				}
			);

			if (response.status >= 400) {
				const { message } = await response.json();
				toast.error(message);
				return;
			}

			const { token } = await response.json();
			localStorage.setItem("token", token);
			setUser(jwt_decode(token));
			navigate(HOME);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	return (
		<Form bg="./images/backgrounds/login-register.jpeg">
			<Form.SmallContainer>
				<Form.Title>Log In</Form.Title>

				<Form.Base onSubmit={handleSubmit}>
					<Form.Input
						type="text"
						placeholder="Email Address"
						value={email}
						onChange={({ target }) => setEmail(target.value)}
					/>

					<Form.Input
						type="password"
						placeholder="Password"
						value={password}
						onChange={({ target }) => setPassword(target.value)}
					/>

					<div style={{ display: "flex" }}>
						<Form.Input
							type="checkbox"
							id="admin"
							value={continueAsAdmin}
							onChange={() =>
								setContinueAsAdmin(!continueAsAdmin)
							}
						/>
						<Form.Label htmlFor="admin">
							Continue as Admin.
						</Form.Label>
					</div>

					<Form.Button
						type="submit"
						disabled={email === "" || password === ""}
						border_radius="20px"
					>
						Log In
					</Form.Button>
				</Form.Base>

				<Form.Text>
					Don't have an account?{" "}
					<Form.Link to={SIGNUP}>Sign Up</Form.Link>
				</Form.Text>
			</Form.SmallContainer>
		</Form>
	);
};

export default LogIn;
