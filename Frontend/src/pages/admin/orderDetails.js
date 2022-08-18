import { OrderForm } from "../../containers";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_ORDER } from "../../constants/routes";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";

const OrderDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const {
		data: order,
		setData: setOrder,
		error: err1,
		isLoading,
	} = useFetch(`${process.env.REACT_APP_API_REST}/api/order/${id}`);

	const { data: products, error: err2 } = useFetch(
		process.env.REACT_APP_API_PRODUCT
	);

	const cartToRender = [];

	order?.cart.forEach((item) => {
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

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_REST}/api/order/${id}`,
				{
					method: "PATCH",
					body: JSON.stringify({ status: order.status }),
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						"x-auth-token": localStorage.getItem("token"),
					},
				}
			);

			const { message } = await response.json();

			if (response.status >= 400) {
				toast.error(message);
				return;
			}

			navigate(ADMIN_ORDER);
			toast.success(message);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	if (err1 || err2) {
		toast.error("Internal Server Error.");
		navigate(ADMIN_ORDER);
		return;
	}

	return (
		<div style={{ paddingBottom: "30px" }}>
			<OrderForm
				isLoading={isLoading}
				order={order}
				setOrder={setOrder}
				cart={cartToRender}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};

export default OrderDetails;
