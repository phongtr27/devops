const filterByField = (data, arr, field) => {
	let filterSet = new Set(arr);
	let filteredData = data?.filter((item) => filterSet.has(item[field]));
	return filteredData;
};

const filterByPrice = (data, arr) => {
	arr = arr.map((i) => JSON.parse(i));

	let filterData = [];

	for (let i = 0; i < arr.length; i++) {
		let tempData = [];
		tempData = data?.filter((item) => {
			if (arr[i].length === 1) {
				return item.price >= arr[i][0];
			}

			return item.price >= arr[i][0] && item.price < arr[i][1];
		});

		filterData = filterData.concat(tempData);
	}

	return filterData;
};

const filterBySize = (data, arr) => {
	data?.forEach((item) => {
		item.sizes = [];
		item.options.forEach((option) => {
			option.quantityPerSize.forEach((i) => item.sizes.push(i.size));
		});
	});

	let filteredData = data?.filter((item) =>
		item.sizes.some((value) => arr.includes(value))
	);
	return filteredData;
};

export const filterProduct = (
	data,
	filterCategory,
	filterSubCategory,
	filterSale,
	filterPrice,
	filterSize
) => {
	if (filterCategory.length > 0) {
		data = filterByField(data, filterCategory, "category");
	}

	if (filterSubCategory.length > 0) {
		data = filterByField(data, filterSubCategory, "subCategory");
	}

	if (filterSale) {
		data = data?.filter((item) => item.discount > 0);
	}

	if (filterPrice.length > 0) {
		data = filterByPrice(data, filterPrice);
	}

	if (filterSize.length > 0) {
		data = filterBySize(data, filterSize);
	}

	return data;
};
