import React from "react";
import { Loading, Table } from "../../components";
import { DeleteConfirmation } from "../../containers";
import Config from "../../config.json";

const CategoryTable = ({
	isLoading,
	PageSize,
	activePage,
	categories,
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
				<Table.Title>Category Table</Table.Title>

				<Table.Base fullBorder>
					<Table.Head>
						<Table.Row>
							<Table.Header>No</Table.Header>
							<Table.Header>Category Name</Table.Header>
							<Table.Header>Category Image</Table.Header>
							<Table.Header>Action</Table.Header>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{categories?.map((category, index) => (
							<Table.Row key={index}>
								<Table.Data>
									{PageSize * (activePage - 1) + index + 1}
								</Table.Data>

								<Table.Data>{category.name}</Table.Data>

								<Table.Data>
									<Table.Image
										src={`${Config.REACT_APP_API_REST}/public${category.img}`}
										alt={category.name}
									/>
								</Table.Data>

								<Table.Data>
									<Table.Button>
										<Table.Link to={`${category._id}`}>
											<i className="fas fa-edit"></i>
										</Table.Link>
									</Table.Button>

									<Table.Button
										onClick={() => {
											setIdToDelete(category._id);
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

export default CategoryTable;
