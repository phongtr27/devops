import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useComponentVisible from "../../hooks/useComponentVisible";
import { ProductTable, OrderTable } from "../../containers";
import Pagination from "react-js-pagination";
import { toast } from "react-toastify";
import { useMemo } from "react";
import Config from "../../config.json";

let PageSize = 5;

const Dashboard = () => {
	const {
		data: products,
		setData: setProducts,
		error: err1,
		isLoading: isLoading1,
	} = useFetch(`${Config.REACT_APP_API_PRODUCT}/topseller`);

	const [activePage, setActivePage] = useState(1);

	const [idToDelete, setIdToDelete] = useState(null);

	const {
		isComponentVisible: showDeleteConfirmation,
		setIsComponentVisible: setShowDeleteConfirmation,
		ref: modalRef,
	} = useComponentVisible(false);

	const {
		data: orders,
		error: err2,
		isLoading: isLoading2,
	} = useFetch(`${Config.REACT_APP_API_REST}/api/order/pending`);

	const handlePageChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	const handleDelete = async (id) => {
		try {
			const response = await fetch(
				`${Config.REACT_APP_API_PRODUCT}/${id}`,
				{
					method: "DELETE",
					headers: {
						"x-auth-token": localStorage.getItem("token"),
					},
				}
			);

			const { message } = await response.json();

			if (response.status >= 400) {
				toast.error(message);
				return;
			}

			setShowDeleteConfirmation(false);
			setProducts(products.filter((product) => product._id !== id));
			toast.success(message);
			setActivePage(1);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	const ordersData = useMemo(() => {
		const firstPageIndex = (activePage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		const ordersData = orders?.slice(firstPageIndex, lastPageIndex);
		return ordersData;
	}, [activePage, orders]);

	if (err1 || err2) {
		toast.error("Internal Server Error.");
		return;
	}

	return (
		<div className="paddingBot">
			<ProductTable
				title="Top Selling Products"
				isLoading={isLoading1}
				PageSize={0}
				activePage={1}
				products={products}
				showDeleteConfirmation={showDeleteConfirmation}
				setShowDeleteConfirmation={setShowDeleteConfirmation}
				modalRef={modalRef}
				onDelete={handleDelete}
				idToDelete={idToDelete}
				setIdToDelete={setIdToDelete}
			/>

			<OrderTable
				title="Pending Orders"
				orders={ordersData}
				isLoading={isLoading2}
				PageSize={PageSize}
				activePage={activePage}
			/>

			<Pagination
				activePage={activePage}
				itemsCountPerPage={PageSize}
				totalItemsCount={orders?.length || 0}
				pageRangeDisplayed={3}
				onChange={handlePageChange}
				hideDisabled={true}
				itemClass="page-item"
				linkClass="page-link"
				hideFirstLastPages={true}
				prevPageText={<i className="fas fa-chevron-left"></i>}
				nextPageText={<i className="fas fa-chevron-right"></i>}
			/>
		</div>
	);
};

export default Dashboard;
