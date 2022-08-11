import { Box, Form } from "../../components";

const CheckoutContainer = ({
	cart,
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	note,
	setNote,
	address,
	setAddress,
	onSubmit,
}) => {
	return (
		<div className="content grid">
			<Form.Base>
				<Form.Title>BILLING DETAILS</Form.Title>

				<Form.Label htmlFor="name">Full Name</Form.Label>
				<Form.Input
					type="text"
					name="name"
					id="name"
					value={name}
					required
					onChange={({ target }) => setName(target.value)}
				/>

				<Form.Label htmlFor="phone">Phone</Form.Label>
				<Form.Input
					type="text"
					name="phone"
					id="phone"
					value={phone}
					required
					onChange={({ target }) => setPhone(target.value)}
				/>

				<Form.Label htmlFor="email">Email</Form.Label>
				<Form.Input
					type="text"
					name="email"
					id="email"
					value={email}
					required
					onChange={({ target }) => setEmail(target.value)}
				/>

				<Form.Label htmlFor="note">Order Notes</Form.Label>
				<Form.Input
					type="text"
					name="note"
					id="note"
					value={note}
					onChange={({ target }) => setNote(target.value)}
				/>

				<Form.Label htmlFor="address">Address</Form.Label>
				<Form.Input
					type="text"
					name="address"
					id="address"
					value={address}
					required
					onChange={({ target }) => setAddress(target.value)}
				/>
			</Form.Base>

			<Box>
				<Box.Title>ORDER SUMMARY</Box.Title>

				{cart?.map((product, index) => (
					<Box.Grid key={index}>
						<Box.Image
							src={
								product.image
									? `${process.env.REACT_APP_API_PRODUCT}/public${product.image}`
									: `images/misc/alt.jpeg`
							}
							alt={product.name}
						/>

						<div>
							<Box.Text>{product.name}</Box.Text>

							<Box.Text>{`Size: ${product.size}`}</Box.Text>

							<div className="flex">
								<Box.Text>{`Qty: ${product.quantity}`}</Box.Text>
								<Box.Text>
									{`$${(
										product.price * product.quantity
									).toFixed(2)}`}
								</Box.Text>
							</div>
						</div>
					</Box.Grid>
				))}

				<hr />

				<div className="flex">
					<Box.Text>TOTAL</Box.Text>
					<Box.Text color="#e64445" fontWeight="700">
						{`$${cart
							.reduce((a, b) => a + +b.price * +b.quantity, 0)
							.toFixed(2)}`}
					</Box.Text>
				</div>

				<Box.Button onClick={onSubmit}>PLACE ORDER</Box.Button>
			</Box>
		</div>
	);
};

export default CheckoutContainer;
