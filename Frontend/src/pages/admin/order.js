import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { OrderTable } from "../../containers";
import Pagination from "react-js-pagination";
import { toast } from "react-toastify";
import Config from "../../config.json";

const PageSize = 7;

const Order = () => {
	const {
		data: orders,
		error,
		isLoading,
	} = useFetch(`${Config.REACT_APP_API_REST}/api/order`);
	const [activePage, setActivePage] = useState(1);

	const handlePageChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	const firstPageIndex = (activePage - 1) * PageSize;
	const lastPageIndex = firstPageIndex + PageSize;
	const ordersData = orders?.slice(firstPageIndex, lastPageIndex);

	if (error) {
		toast.error("Internal Server Error.");
		return;
	}

	return (
		<div className="paddingBot">
			<OrderTable
				title="Orders Table"
				orders={ordersData}
				isLoading={isLoading}
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

export default Order;
