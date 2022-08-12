import { useState } from "react";
import { SubCategoryTable } from "../../containers";
import Pagination from "react-js-pagination";
import useFetch from "../../hooks/useFetch";
import useComponentVisible from "../../hooks/useComponentVisible";
import { toast } from "react-toastify";
import { useMemo } from "react";
import Config from "../../config.json";

let PageSize = 7;

const SubCategory = () => {
	const {
		data: subCategories,
		setData: setSubCategories,
		isLoading,
		error,
	} = useFetch(`${Config.REACT_APP_API_REST}/api/sub-category`);

	const [idToDelete, setIdToDelete] = useState(null);

	const [activePage, setActivePage] = useState(1);

	const {
		isComponentVisible: showDeleteConfirmation,
		setIsComponentVisible: setShowDeleteConfirmation,
		ref: modalRef,
	} = useComponentVisible(false);

	const handlePageChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	const handleDelete = async (id) => {
		try {
			const response = await fetch(
				`${Config.REACT_APP_API_REST}/api/sub-category/${id}`,
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
			setSubCategories(
				subCategories.filter((subCategory) => subCategory._id !== id)
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
		const tableData = subCategories?.slice(firstPageIndex, lastPageIndex);
		return tableData;
	}, [activePage, subCategories]);

	if (error) {
		toast.error("Internal Server Error.");
		return;
	}

	return (
		<div className="paddingBot">
			<SubCategoryTable
				isLoading={isLoading}
				PageSize={PageSize}
				activePage={activePage}
				subCategories={tableData}
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
				totalItemsCount={subCategories?.length || 0}
				pageRangeDisplayed={5}
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

export default SubCategory;
