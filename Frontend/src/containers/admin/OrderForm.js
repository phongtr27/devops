import { Form, Table, Loading } from "../../components";

const OrderForm = ({ order, setOrder, cart, isLoading, onSubmit }) => {
	return (
		<div className="main">
			{isLoading ? <Loading /> : null}

			<Form.BigContainer>
				<Form.Title>Order</Form.Title>

				<Form.Base onSubmit={onSubmit}>
					<Form.Label htmlFor="id">Order ID</Form.Label>
					<Form.Input
						type="text"
						name="id"
						id="id"
						required
						value={order?._id || ""}
						readOnly
					/>

					<Form.Label htmlFor="name">Customer Name</Form.Label>
					<Form.Input
						type="text"
						name="name"
						id="name"
						required
						value={order?.name || ""}
						readOnly
					/>

					<Form.Label htmlFor="phone">Customer Phone</Form.Label>
					<Form.Input
						type="text"
						name="phone"
						id="phone"
						required
						value={order?.phone || ""}
						readOnly
					/>

					<Form.Label htmlFor="email">Customer Email</Form.Label>
					<Form.Input
						type="text"
						name="email"
						id="email"
						required
						value={order?.email || ""}
						readOnly
					/>

					<Form.Label htmlFor="note">Order Notes</Form.Label>
					<Form.Input
						type="text"
						name="note"
						id="note"
						value={order?.note || ""}
						readOnly
					/>

					<Form.Label htmlFor="address">Customer Address</Form.Label>
					<Form.Input
						type="text"
						name="address"
						id="address"
						required
						value={order?.address || ""}
						readOnly
					/>

					<Form.Label htmlFor="price">Price ($)</Form.Label>
					<Form.Input
						type="text"
						name="price"
						id="price"
						required
						value={order?.price || ""}
						readOnly
					/>

					<Form.Label htmlFor="status">Status</Form.Label>
					<Form.Select
						name="status"
						id="status"
						required
						value={order?.status || ""}
						onChange={({ target }) =>
							setOrder({ ...order, status: target.value })
						}
					>
						<Form.Option value="pending">pending</Form.Option>
						<Form.Option value="delivered">delivered</Form.Option>
					</Form.Select>

					<Form.Button
						type="submit"
						background_color="#00c292"
						hover_color="#009c75"
					>
						Submit
					</Form.Button>
				</Form.Base>
			</Form.BigContainer>

			<Table>
				<Table.Title>Cart</Table.Title>

				<Table.Base fullBorder>
					<Table.Head>
						<Table.Row>
							<Table.Header>Product Name</Table.Header>
							<Table.Header>Option</Table.Header>
							<Table.Header>Size</Table.Header>
							<Table.Header>Quantity</Table.Header>
							<Table.Header>Total ($)</Table.Header>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{cart?.map((product, index) => (
							<Table.Row key={index}>
								<Table.Data>{product.name}</Table.Data>

								<Table.Data>
									<Table.Image
										src={
											product.image
												? `${process.env.REACT_APP_API_PRODUCT}/public${product.image}`
												: `images/misc/alt.jpeg`
										}
										alt={product.name}
									/>
								</Table.Data>

								<Table.Data>{product.size}</Table.Data>

								<Table.Data>{product.quantity}</Table.Data>

								<Table.Data>
									{(product.price * product.quantity).toFixed(
										2
									)}
								</Table.Data>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Base>
			</Table>
		</div>
	);
};

export default OrderForm;
