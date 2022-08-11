import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useWidth from "../../hooks/useWidth";
import { ERROR } from "../../constants/routes";
import { ProductViewContainer } from "../../containers";
import { Fade } from "react-awesome-reveal";
import { CartContext } from "../../context/cart";
import { addToCart } from "../../helpers/addToCart";

const ProductUser = () => {
	const { setCart } = useContext(CartContext);
	const navigate = useNavigate();
	const { id } = useParams();
	const {
		data: product,
		error,
		isLoading,
	} = useFetch(`${process.env.REACT_APP_API_PRODUCT}/${id}`);
	const [option, setOption] = useState(0);
	const [size, setSize] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const { width } = useWidth();

	const handleOptionChange = (index) => {
		setOption(index);
		setSize(null);
		setQuantity(1);
	};

	const handleAddToCart = (productId, color, size, quantity) => {
		addToCart(productId, color, size, quantity, setCart);
	};

	if (error) {
		if (error.status >= 400) {
			return navigate("/not-found");
		} else {
			return navigate(`${ERROR}`);
		}
	}

	return (
		<Fade>
			<ProductViewContainer
				product={product}
				isLoading={isLoading}
				optionIndex={option}
				onOptionChange={handleOptionChange}
				size={size}
				onSizeChange={setSize}
				quantity={quantity}
				onQuantityChange={setQuantity}
				onAddToCart={handleAddToCart}
				width={width}
			/>
		</Fade>
	);
};

export default ProductUser;
