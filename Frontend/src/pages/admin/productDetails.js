import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_PRODUCT } from "../../constants/routes";
import { ProductForm } from "../../containers";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";

const ProductDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(true);
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [discount, setDiscount] = useState(0);
	const [selectedFile, setSelectedFile] = useState([]);
	const [options, setOptions] = useState([
		{
			color: "#ffffff",
			quantityPerSize: [{ size: "", quantity: 0 }],
		},
	]);

	const {
		data: categories,
		error: err1,
		isLoading: isLoading1,
	} = useFetch(`${process.env.REACT_APP_API_REST}/api/category`);

	const {
		data: subCategories,
		error: err2,
		isLoading: isLoading2,
	} = useFetch(`${process.env.REACT_APP_API_REST}/api/sub-category`);

	const filteredSubCategories = subCategories?.filter(
		(item) => item.category === category
	);

	useEffect(() => {
		if (id !== "new") {
			fetch(`${process.env.REACT_APP_API_PRODUCT}/${id}`)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					return Promise.reject(response);
				})
				.then((data) => {
					setName(data.name);
					setCategory(data.category);
					setSubCategory(data.subCategory);
					setDescription(data.description);
					setPrice(data.price);
					setDiscount(data.discount);
					setOptions(data.options);
				})
				.catch((err) => {
					toast.error("Internal Server Error.");
					navigate(`${ADMIN_PRODUCT}/new`);
				});
		} else {
			setName("");
			setCategory("");
			setSubCategory("");
			setDescription("");
			setPrice("");
			setDiscount(0);
			setOptions([
				{
					color: "#ffffff",
					quantityPerSize: [{ size: "", quantity: 0 }],
				},
			]);
		}
		setIsLoading(false);
	}, [id, navigate]);

	const handleFileUpload = (index, e) => {
		const newSelectedFile = [...selectedFile];
		newSelectedFile[index] = e.target.files;
		setSelectedFile(newSelectedFile);
	};

	const handleOptionAdd = () => {
		const newOption = {
			color: "#ffffff",
			quantityPerSize: [{ size: "", quantity: 0 }],
		};
		setOptions([...options, newOption]);
	};

	const handleOptionDelete = (index) => {
		const newOptions = [...options];
		if (newOptions.length > 1) {
			newOptions.splice(index, 1);
			setOptions(newOptions);
		}
	};

	const handleSizeAdd = (index) => {
		const newSize = { size: "", quantity: 0 };
		const newOptions = [...options];
		newOptions[index].quantityPerSize.push(newSize);
		setOptions(newOptions);
	};

	const handleSizeDelete = (outerIndex, index) => {
		const newOptions = [...options];
		if (newOptions[outerIndex].quantityPerSize.length > 1) {
			newOptions[outerIndex].quantityPerSize.splice(index, 1);
			setOptions(newOptions);
		}
	};

	const handleColorChange = (index, e) => {
		const newOptions = [...options];
		newOptions[index].color = e.target.value;
		setOptions(newOptions);
	};

	const handleQuantityPerSizeChange = (outerIndex, index, e) => {
		const newOptions = [...options];
		newOptions[outerIndex].quantityPerSize[index][e.target.name] =
			e.target.value;
		setOptions(newOptions);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("category", category);
		formData.append("subCategory", subCategory);
		formData.append("description", description);
		formData.append("price", price);
		formData.append("discount", discount);
		formData.append("options", JSON.stringify(options));

		selectedFile.forEach((item, index) => {
			for (let i = 0; i < item.length; i++) {
				if (item.length > 0) {
					formData.append(`${index}`, item[i]);
				}
			}
		});

		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_PRODUCT}/${id === "new" ? "" : id}`,
				{
					method: id === "new" ? "POST" : "PUT",
					body: formData,
					headers: {
						Accept: "multipart/form-data",
						"x-auth-token": localStorage.getItem("token"),
					},
				}
			);
			const { message } = await response.json();

			if (response.status >= 400) {
				toast.error(message);
				return;
			}

			navigate(ADMIN_PRODUCT);
			toast.success(message);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	if (err1 || err2) {
		toast.error("Internal Server Error.");
		return;
	}

	return (
		<ProductForm
			id={id}
			isLoading={isLoading}
			isLoading1={isLoading1}
			isLoading2={isLoading2}
			name={name}
			setName={setName}
			category={category}
			setCategory={setCategory}
			subCategory={subCategory}
			setSubCategory={setSubCategory}
			description={description}
			setDescription={setDescription}
			price={price}
			setPrice={setPrice}
			discount={discount}
			setDiscount={setDiscount}
			selectedFile={selectedFile}
			options={options}
			onOptionAdd={handleOptionAdd}
			onOptionDelete={handleOptionDelete}
			onSizeAdd={handleSizeAdd}
			onSizeDelete={handleSizeDelete}
			onColorChange={handleColorChange}
			onFileUpload={handleFileUpload}
			onQuantityPerSizeChange={handleQuantityPerSizeChange}
			onSubmit={handleSubmit}
			categories={categories}
			subCategories={filteredSubCategories}
		/>
	);
};

export default ProductDetails;
