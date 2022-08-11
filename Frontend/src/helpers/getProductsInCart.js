export const getProductsInCart = () => {
	const products = localStorage.getItem("cart");
	return products ? JSON.parse(products) : [];
};
