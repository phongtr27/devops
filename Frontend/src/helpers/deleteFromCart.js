import { toast } from "react-toastify";

export const deleteFromCart = (index, setCart) => {
	const cart = JSON.parse(localStorage.getItem("cart"));

	cart.splice(index, 1);

	if (cart.length === 0) {
		localStorage.removeItem("cart");
		setCart([]);
		return;
	}

	localStorage.setItem("cart", JSON.stringify(cart));
	setCart(cart);

	toast.success("Successfully Deleted.");
};
