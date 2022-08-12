import { useState } from "react";
import { CategoryTable } from "../../containers";
import Pagination from "react-js-pagination";
import useFetch from "../../hooks/useFetch";
import useComponentVisible from "../../hooks/useComponentVisible";
import { toast } from "react-toastify";
import { useMemo } from "react";
import Config from "../../config.json"

let PageSize = 3;

const Category = () => {
	const {
		data: categories,
		setData: setCategories,
		isLoading,
		error,
	} = useFetch(`${Config.REACT_APP_API_REST}/api/category`);

	const {
		isComponentVisible: showDeleteConfirmation,
		setIsComponentVisible: setShowDeleteConfirmation,
		ref: modalRef,
	} = useComponentVisible(false);

	const [idToDelete, setIdToDelete] = useState(null);
	const [activePage, setActivePage] = useState(1);

	const handlePageChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	const handleDelete = async (id) => {
		try {
			const response = await fetch(
				`${Config.REACT_APP_API_REST}/api/category/${id}`,
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
			setCategories(
				categories?.filter((category) => category._id !== id)
			);
			toast.success(message);
			setActivePage(1);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	const tableData = useMemo(() => {
		const firstPageIndex = (activePage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		const tableData = categories?.slice(firstPageIndex, lastPageIndex);
		return tableData;
	}, [activePage, categories]);

	if (error) {
		toast.error("Internal Server Error.");
		return;
	}

	return (
		<div className="paddingBot">
			<CategoryTable
				isLoading={isLoading}
				PageSize={PageSize}
				activePage={activePage}
				categories={tableData}
				showDeleteConfirmation={showDeleteConfirmation}
				setShowDeleteConfirmation={setShowDeleteConfirmation}
				modalRef={modalRef}
				onDelete={handleDelete}
				idToDelete={idToDelete}
				setIdToDelete={setIdToDelete}
			/>

			<Pagination
				activePage={activePage}
				itemsCountPerPage={PageSize}
				totalItemsCount={categories?.length || 0}
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

export default Category;
