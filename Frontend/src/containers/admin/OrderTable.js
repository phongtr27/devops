import { Table, Loading } from "../../components";

const OrderTable = ({ title, orders, PageSize, activePage, isLoading }) => {
	return (
		<div className="main">
			{isLoading ? <Loading /> : null}

			<Table>
				<Table.Title>{title}</Table.Title>
				<Table.Base fullBorder>
					<Table.Head>
						<Table.Row>
							<Table.Header>No</Table.Header>
							<Table.Header>Customer Name</Table.Header>
							<Table.Header>Customer Phone</Table.Header>
							<Table.Header>Price ($)</Table.Header>
							<Table.Header>Status</Table.Header>
							<Table.Header>Action</Table.Header>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{orders?.map((order, index) => (
							<Table.Row key={index}>
								<Table.Data>
									{PageSize * (activePage - 1) + index + 1}
								</Table.Data>
								<Table.Data>{order.name}</Table.Data>
								<Table.Data>{order.phone}</Table.Data>
								<Table.Data>{order.price}</Table.Data>
								<Table.Data>{order.status}</Table.Data>
								<Table.Data>
									<Table.Button>
										<Table.Link to={`order/${order._id}`}>
											<i className="fas fa-edit"></i>
										</Table.Link>
									</Table.Button>
								</Table.Data>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Base>
			</Table>
		</div>
	);
};

export default OrderTable;
