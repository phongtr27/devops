import { useNavigate } from "react-router-dom";
import { useContext, useState, useMemo } from "react";
import { UserContext } from "../../context/user";
import { CartContext } from "../../context/cart";
import useFetch from "../../hooks/useFetch";
import { ERROR, SHOP } from "../../constants/routes";
import { CheckoutContainer } from "../../containers";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import Config from "../../config.json"

const Checkout = () => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const { cart, setCart } = useContext(CartContext);
	const { data: products, error } = useFetch(
		Config.REACT_APP_API_PRODUCT
	);
	const [name, setName] = useState(user?.name || "");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState(user?.email || "");
	const [note, setNote] = useState("");
	const [address, setAddress] = useState(user?.address || "");

	const cartToRender = useMemo(() => {
		const temp = [];

		cart.forEach((item) => {
			const product = products?.find((i) => i._id === item.productId);
			temp.push({
				name: product?.name,
				size: item.size,
				quantity: item.quantity,
				price: (product?.price * (1 - product?.discount / 100)).toFixed(
					2
				),
				image: product?.options.find(
					(option) => option.color === item.color
				).img[0],
			});
		});

		return temp;
	}, [cart, products]);

	const price = useMemo(() => {
		const total = +cartToRender
			.reduce((a, b) => a + +b.price * +b.quantity, 0)
			.toFixed(2);

		return total;
	}, [cartToRender]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (cart.length === 0) {
			toast.warn("No item in cart.");
			return;
		}

		const data =
			note.length > 0
				? { name, phone, email, note, address, cart, price }
				: { name, phone, email, address, cart, price };

		try {
			const response = await fetch(
				`${Config.REACT_APP_API_REST}/api/order`,
				{
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				}
			);

			const { message } = await response.json();

			if (response.status >= 400) {
				toast.error(message);
				return;
			}

			localStorage.removeItem("cart");
			setCart([]);
			navigate(SHOP);
			toast.success(message);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	if (error) {
		return navigate(`${ERROR}`);
	}

	return (
		<Fade triggerOnce>
			<CheckoutContainer
				cart={cartToRender}
				name={name}
				setName={setName}
				phone={phone}
				setPhone={setPhone}
				email={email}
				setEmail={setEmail}
				note={note}
				setNote={setNote}
				address={address}
				setAddress={setAddress}
				onSubmit={handleSubmit}
			/>
		</Fade>
	);
};

export default Checkout;
