import { useState } from "react";
import { NavbarUser, FooterContainer } from "../../containers";
import { CartContext } from "../../context/cart";
import { getProductsInCart } from "../../helpers/getProductsInCart";

const User = ({ children }) => {
	const [cart, setCart] = useState(getProductsInCart());

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			<NavbarUser />
			{children}
			<FooterContainer />
		</CartContext.Provider>
	);
};

export default User;
