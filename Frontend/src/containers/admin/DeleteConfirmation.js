import { Modal } from "../../components";

const DeleteConfirmation = ({
	showDeleteConfirmation,
	setShowDeleteConfirmation,
	modalRef,
	onDelete,
	idToDelete,
}) => {
	return (
		<Modal
			showModal={showDeleteConfirmation}
			setShowModal={setShowDeleteConfirmation}
			modalRef={modalRef}
		>
			Are you sure you want to delete?
			<Modal.GroupButton>
				<Modal.Button onClick={() => setShowDeleteConfirmation(false)}>
					Cancel
				</Modal.Button>

				<Modal.Button bg="#e50914" onClick={() => onDelete(idToDelete)}>
					Confirm
				</Modal.Button>
			</Modal.GroupButton>
		</Modal>
	);
};

export default DeleteConfirmation;
