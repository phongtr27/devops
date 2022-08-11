import ReactDOM from "react-dom";
import {
	Overlay,
	Inner,
	Close,
	GroupButton,
	Button,
	SideInner,
	SideOverlay,
} from "./styles/modal.styles";

const Modal = ({
	children,
	topPosition,
	showModal,
	setShowModal,
	modalRef,
	...restProps
}) => {
	return showModal
		? ReactDOM.createPortal(
				<Overlay topPosition={topPosition}>
					<Inner {...restProps} ref={modalRef}>
						{children}
						<Close onClick={() => setShowModal(false)}>
							<i className="fas fa-times-circle"></i>
						</Close>
					</Inner>
				</Overlay>,
				document.body
		  )
		: null;
};

Modal.GroupButton = function ModalGroupButton({ children, ...restProps }) {
	return <GroupButton {...restProps}>{children}</GroupButton>;
};

Modal.Button = function ModalButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Modal.SideModal = function ModalSide({
	children,
	showModal,
	setShowModal,
	sideModalRef,
	...restProps
}) {
	return showModal
		? ReactDOM.createPortal(
				<SideOverlay>
					<SideInner {...restProps} ref={sideModalRef}>
						{children}
					</SideInner>
				</SideOverlay>,
				document.body
		  )
		: null;
};

export default Modal;
