import { useState } from "react";
import { ProductContainer, FilterSidebar, FilterModal } from "../../containers";
import useFetch from "../../hooks/useFetch";
import useWidth from "../../hooks/useWidth";
import useComponentVisible from "../../hooks/useComponentVisible";
import { filterProduct } from "../../helpers/filterProduct";
import { ERROR } from "../../constants/routes";
import { Fade } from "react-awesome-reveal";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shop = () => {
	const navigate = useNavigate();

	const { width } = useWidth();

	const {
		isComponentVisible: showFilterModal,
		setIsComponentVisible: setShowFilterModal,
		ref: sideModalRef,
	} = useComponentVisible(false);

	const [searchParams] = useSearchParams();

	const {
		data: products,
		error: err1,
		isLoading: isLoading1,
	} = useFetch(process.env.REACT_APP_API_PRODUCT);

	const {
		data: categories,
		error: err2,
		isLoading: isLoading2,
	} = useFetch(`${process.env.REACT_APP_API_REST}/api/category`);

	const {
		data: subCategories,
		error: err3,
		isLoading: isLoading3,
	} = useFetch(`${process.env.REACT_APP_API_REST}/api/sub-category`);

	const [productLimit, setProductLimit] = useState(9);

	const [filterCategory, setFilterCategory] = useState(
		searchParams.get("category") ? [searchParams.get("category")] : []
	);

	const [filterSubCategory, setFilterSubCategory] = useState([]);

	const [filterSale, setFilterSale] = useState(
		searchParams.get("sale") ? true : false
	);

	const [filterPrice, setFilterPrice] = useState([]);

	const [filterSize, setFilterSize] = useState([]);

	const handleLoadMore = () => {
		setProductLimit(productLimit + 5);
	};

	const handleFilterCategoryChange = (item) => {
		const newFilterCategory = [...filterCategory];

		if (newFilterCategory.includes(item)) {
			const index = newFilterCategory.indexOf(item);
			newFilterCategory.splice(index, 1);
		} else {
			newFilterCategory.push(item);
		}

		setFilterCategory(newFilterCategory);
	};

	const handleFilterSubCategoryChange = (item) => {
		const newFilterSubCategory = [...filterSubCategory];
		if (newFilterSubCategory.includes(item)) {
			const index = newFilterSubCategory.indexOf(item);
			newFilterSubCategory.splice(index, 1);
		} else {
			newFilterSubCategory.push(item);
		}
		setFilterSubCategory(newFilterSubCategory);
	};

	const handleFilterSaleChange = () => {
		setFilterSale(!filterSale);
	};

	const handleFilterPriceChange = (item) => {
		const newFilterPrice = [...filterPrice];
		if (newFilterPrice.includes(item)) {
			const index = newFilterPrice.indexOf(item);
			newFilterPrice.splice(index, 1);
		} else {
			newFilterPrice.push(item);
		}
		setFilterPrice(newFilterPrice);
	};

	const handleFilterSizeChange = (item) => {
		const newFilterSize = [...filterSize];
		if (newFilterSize.includes(item)) {
			const index = newFilterSize.indexOf(item);
			newFilterSize.splice(index, 1);
		} else {
			newFilterSize.push(item);
		}
		setFilterSize(newFilterSize);
	};

	const filteredProducts = filterProduct(
		products,
		filterCategory,
		filterSubCategory,
		filterSale,
		filterPrice,
		filterSize
	);

	if (err1 || err2 || err3) {
		return navigate(`${ERROR}`);
	}

	return (
		<Fade>
			<div className="flex">
				<FilterSidebar
					categories={categories}
					isLoading2={isLoading2}
					subCategories={subCategories}
					isLoading3={isLoading3}
					filterCategory={filterCategory}
					filterSubCategory={filterSubCategory}
					filterSale={filterSale}
					filterPrice={filterPrice}
					filterSize={filterSize}
					onFilterCategoryChange={handleFilterCategoryChange}
					onFilterSubCategoryChange={handleFilterSubCategoryChange}
					onFilterSaleChange={handleFilterSaleChange}
					onFilterPriceChange={handleFilterPriceChange}
					onFilterSizeChange={handleFilterSizeChange}
				/>

				<ProductContainer
					products={filteredProducts}
					isLoading={isLoading1}
					productLimit={productLimit}
					onLoadMore={handleLoadMore}
					setShowFilterModal={setShowFilterModal}
					width={width}
				/>

				{width <= 768 && (
					<FilterModal
						showFilterModal={showFilterModal}
						setShowFilterModal={setShowFilterModal}
						sideModalRef={sideModalRef}
						categories={categories}
						isLoading2={isLoading2}
						subCategories={subCategories}
						isLoading3={isLoading3}
						filterCategory={filterCategory}
						filterSubCategory={filterSubCategory}
						filterSale={filterSale}
						filterPrice={filterPrice}
						filterSize={filterSize}
						onFilterCategoryChange={handleFilterCategoryChange}
						onFilterSubCategoryChange={
							handleFilterSubCategoryChange
						}
						onFilterSaleChange={handleFilterSaleChange}
						onFilterPriceChange={handleFilterPriceChange}
						onFilterSizeChange={handleFilterSizeChange}
					/>
				)}
			</div>
		</Fade>
	);
};

export default Shop;
