import { Table, Card } from "../../components";
import { addQuantity, subtractQuantity } from "../../helpers/updateCart";

const CartTable = ({
	cart,
	setCart,
	onItemDelete,
	continueShopping,
	proceedToCheckout,
	width,
}) => {
	return (
		<>
			{width > 480 ? (
				<div className="content" style={{ overflow: "auto" }}>
					<Table.Base>
						<Table.Head>
							<Table.Row>
								<Table.Header>PRODUCT</Table.Header>

								<Table.Header>QUANTITY</Table.Header>

								<Table.Header>TOTAL</Table.Header>

								<Table.Header>ACTION</Table.Header>
							</Table.Row>
						</Table.Head>

						<Table.Body>
							{cart.map((product, index) => (
								<Table.Row key={index}>
									<Table.Data>
										<Table.Grid>
											<Table.Image
												src={
													product.image
														? `${process.env.REACT_APP_API_PRODUCT}/public${product.image}`
														: `images/misc/alt.jpeg`
												}
												alt={product.name}
											/>

											<div style={{ textAlign: "left" }}>
												<Table.Text>
													{product.name}
												</Table.Text>

												<Table.Text>
													{`$${product.price}`}
												</Table.Text>

												<Table.Text>{`Size: ${product.size}`}</Table.Text>
											</div>
										</Table.Grid>
									</Table.Data>

									<Table.Data>
										<Table.Button
											onClick={() =>
												subtractQuantity(index, setCart)
											}
											disable={product.quantity === 1}
										>
											<i className="fas fa-minus-square"></i>
										</Table.Button>{" "}
										{product.quantity}{" "}
										<Table.Button
											onClick={() =>
												addQuantity(index, setCart)
											}
										>
											<i className="fas fa-plus-square"></i>
										</Table.Button>
									</Table.Data>

									<Table.Data>
										{`$${(
											product.price * product.quantity
										).toFixed(2)}`}
									</Table.Data>

									<Table.Data>
										<Table.Button
											onClick={() => onItemDelete(index)}
										>
											<i className="fas fa-times-circle"></i>
										</Table.Button>
									</Table.Data>
								</Table.Row>
							))}

							<Table.Row>
								<Table.Data noBorder>
									<Table.BigButton onClick={continueShopping}>
										CONTINUE SHOPPING
									</Table.BigButton>
								</Table.Data>

								<Table.Data
									noBorder
									style={{ fontWeight: 700 }}
								>
									TOTAL
								</Table.Data>

								<Table.Data
									noBorder
									style={{
										color: "#e53637",
										fontStyle: "italic",
										fontSize: "16px",
										fontWeight: "700",
									}}
								>
									{`$${cart
										.reduce(
											(a, b) =>
												a + +b.price * +b.quantity,
											0
										)
										.toFixed(2)}`}
								</Table.Data>

								<Table.Data noBorder>
									<Card.Button
										style={{ marginTop: 0 }}
										onClick={proceedToCheckout}
									>
										PROCEED TO CHECKOUT
									</Card.Button>
								</Table.Data>
							</Table.Row>
						</Table.Body>
					</Table.Base>
				</div>
			) : (
				<div
					className="content"
					style={{ marginLeft: "10px", marginRight: "10px" }}
				>
					<Table.Base>
						<Table.Head>
							<Table.Row>
								<Table.Header>PRODUCT</Table.Header>

								<Table.Header>QUANTITY</Table.Header>

								<Table.Header>TOTAL</Table.Header>

								<Table.Header>ACTION</Table.Header>
							</Table.Row>
						</Table.Head>

						<Table.Body>
							{cart.map((product, index) => (
								<Table.Row key={index}>
									<Table.Data>
										<Table.Image
											src={
												product.image
													? `${process.env.REACT_APP_API_PRODUCT}/public${product.image}`
													: `images/misc/alt.jpeg`
											}
											alt={product.name}
										/>
										<Table.Text>{product.name}</Table.Text>
										<Table.Text>{`Size: ${product.size}`}</Table.Text>
									</Table.Data>

									<Table.Data>
										<Table.Button
											onClick={() =>
												subtractQuantity(index, setCart)
											}
											disable={product.quantity === 1}
										>
											<i className="fas fa-minus-square"></i>
										</Table.Button>{" "}
										{product.quantity}{" "}
										<Table.Button
											onClick={() =>
												addQuantity(index, setCart)
											}
										>
											<i className="fas fa-plus-square"></i>
										</Table.Button>
									</Table.Data>

									<Table.Data>
										{`$${(
											product.price * product.quantity
										).toFixed(2)}`}
									</Table.Data>

									<Table.Data>
										<Table.Button
											onClick={() => onItemDelete(index)}
										>
											<i className="fas fa-times-circle"></i>
										</Table.Button>
									</Table.Data>
								</Table.Row>
							))}

							<Table.Row>
								<Table.Data noBorder></Table.Data>

								<Table.Data
									noBorder
									style={{ fontWeight: 700 }}
								>
									TOTAL
								</Table.Data>

								<Table.Data
									noBorder
									style={{
										color: "#e53637",
										fontStyle: "italic",
										fontSize: "16px",
										fontWeight: "700",
									}}
								>
									{`$${cart
										.reduce(
											(a, b) =>
												a + +b.price * +b.quantity,
											0
										)
										.toFixed(2)}`}
								</Table.Data>

								<Table.Data noBorder></Table.Data>
							</Table.Row>
						</Table.Body>
					</Table.Base>

					<Table.BigButton
						onClick={continueShopping}
						style={{ marginTop: "30px" }}
					>
						CONTINUE SHOPPING
					</Table.BigButton>

					<Card.Button
						style={{ marginTop: "30px" }}
						onClick={proceedToCheckout}
					>
						PROCEED TO CHECKOUT
					</Card.Button>
				</div>
			)}
		</>
	);
};

export default CartTable;
