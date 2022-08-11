import { toast } from "react-toastify";

export const addToCart = (productId, color, size, quantity, setCart) => {
	const data = { productId, color, size, quantity };

	const cart = JSON.parse(localStorage.getItem("cart"));

	if (!cart) {
		localStorage.setItem("cart", JSON.stringify([data]));
		setCart([data]);
		toast.success("Added to cart.");
		return;
	}

	const productIndex = cart.indexOf(
		cart.find(
			(item) =>
				item.productId === productId &&
				item.color === color &&
				item.size === size
		)
	);

	if (productIndex !== -1) {
		cart[productIndex].quantity =
			Number(cart[productIndex].quantity) + Number(quantity);
		localStorage.setItem("cart", JSON.stringify(cart));
		setCart(cart);
		toast.success("Added to cart.");
		return;
	}

	cart.push(data);
	localStorage.setItem("cart", JSON.stringify(cart));
	setCart(cart);
	toast.success("Added to cart.");
};
