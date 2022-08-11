import React from "react";
import { Loading, Table } from "../../components";
import { DeleteConfirmation } from "../../containers";

const SubCategoryTable = ({
	isLoading,
	PageSize,
	activePage,
	subCategories,
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
				<Table.Title>Sub-Category Table</Table.Title>

				<Table.Base fullBorder>
					<Table.Head>
						<Table.Row>
							<Table.Header>No</Table.Header>
							<Table.Header>Sub-Category Name</Table.Header>
							<Table.Header>Category</Table.Header>
							<Table.Header>Action</Table.Header>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{subCategories?.map((subCategory, index) => (
							<Table.Row key={index}>
								<Table.Data>
									{PageSize * (activePage - 1) + index + 1}
								</Table.Data>

								<Table.Data>{subCategory.name}</Table.Data>

								<Table.Data>{subCategory.category}</Table.Data>

								<Table.Data>
									<Table.Button>
										<Table.Link to={`${subCategory._id}`}>
											<i className="fas fa-edit"></i>
										</Table.Link>
									</Table.Button>

									<Table.Button
										onClick={() => {
											setIdToDelete(subCategory._id);
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

export default SubCategoryTable;
