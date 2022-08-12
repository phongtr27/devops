import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart";
import useFetch from "../../hooks/useFetch";
import useWidth from "../../hooks/useWidth";
import { deleteFromCart } from "../../helpers/deleteFromCart";
import { CHECKOUT, ERROR, SHOP } from "../../constants/routes";
import { CartTable } from "../../containers";
import { Fade } from "react-awesome-reveal";
import Config from "../../config.json";

const Cart = () => {
	const navigate = useNavigate();
	const { cart, setCart } = useContext(CartContext);
	const { data: products, error } = useFetch(Config.REACT_APP_API_PRODUCT);

	const { width } = useWidth();

	const cartToRender = [];

	cart.forEach((item) => {
		const product = products?.find((i) => i._id === item.productId);
		cartToRender.push({
			name: product?.name,
			size: item.size,
			quantity: item.quantity,
			price: (product?.price * (1 - product?.discount / 100)).toFixed(2),
			image: product?.options.find(
				(option) => option.color === item.color
			).img[0],
		});
	});

	const handleDeleteItem = (index) => {
		deleteFromCart(index, setCart);
	};

	const continueShopping = () => {
		navigate(SHOP);
	};

	const proceedToCheckout = () => {
		navigate(CHECKOUT);
	};

	if (error) {
		return navigate(`${ERROR}`);
	}

	return (
		<Fade triggerOnce>
			<CartTable
				cart={cartToRender}
				setCart={setCart}
				onItemDelete={handleDeleteItem}
				continueShopping={continueShopping}
				proceedToCheckout={proceedToCheckout}
				width={width}
			/>
		</Fade>
	);
};

export default Cart;
