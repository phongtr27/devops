import { ADMIN_PRODUCT } from "../../constants/routes";
import { Loading, Table } from "../../components";
import { DeleteConfirmation } from "../../containers";

const ProductTable = ({
	title,
	isLoading,
	PageSize,
	activePage,
	products,
	showDeleteConfirmation,
	setShowDeleteConfirmation,
	modalRef,
	onDelete,
	idToDelete,
	setIdToDelete,
}) => {
	return (
		<div className="main">
			{isLoading ? <Loading /> : null}
			<Table>
				<Table.Title>{title}</Table.Title>

				<Table.Base fullBorder>
					<Table.Head>
						<Table.Row>
							<Table.Header>No</Table.Header>
							<Table.Header>Name</Table.Header>
							<Table.Header>Price ($)</Table.Header>
							<Table.Header>Discount (%)</Table.Header>
							<Table.Header>Category</Table.Header>
							<Table.Header>Sub-Category</Table.Header>
							<Table.Header>Action</Table.Header>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{products?.map((product, index) => (
							<Table.Row key={index}>
								<Table.Data>
									{PageSize * (activePage - 1) + index + 1}
								</Table.Data>

								<Table.Data>{product.name}</Table.Data>

								<Table.Data>{product.price}</Table.Data>

								<Table.Data>{product.discount}</Table.Data>

								<Table.Data>{product.category}</Table.Data>

								<Table.Data>{product.subCategory}</Table.Data>

								<Table.Data>
									<Table.Button>
										<Table.Link
											to={`${ADMIN_PRODUCT}/${product._id}`}
										>
											<i className="fas fa-edit"></i>
										</Table.Link>
									</Table.Button>

									<Table.Button
										onClick={() => {
											setIdToDelete(product._id);
											setShowDeleteConfirmation(true);
										}}
									>
										<i className="fas fa-trash-alt"></i>
									</Table.Button>
								</Table.Data>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Base>
			</Table>

			<DeleteConfirmation
				showDeleteConfirmation={showDeleteConfirmation}
				setShowDeleteConfirmation={setShowDeleteConfirmation}
				modalRef={modalRef}
				onDelete={onDelete}
				idToDelete={idToDelete}
			/>
		</div>
	);
};

export default ProductTable;
