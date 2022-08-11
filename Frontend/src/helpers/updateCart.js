export const addQuantity = (index, setCart) => {
	const cart = JSON.parse(localStorage.getItem("cart"));
	cart[index].quantity = cart[index].quantity + 1;
	localStorage.setItem("cart", JSON.stringify(cart));
	setCart(cart);
};

export const subtractQuantity = (index, setCart) => {
	const cart = JSON.parse(localStorage.getItem("cart"));
	if (cart[index].quantity === 1) return;
	cart[index].quantity = cart[index].quantity - 1;
	localStorage.setItem("cart", JSON.stringify(cart));
	setCart(cart);
};
