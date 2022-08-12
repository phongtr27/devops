import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_SUB_CATEGORY } from "../../constants/routes";
import { SubCategoryForm } from "../../containers";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";
import Config from "../../config.json";

const SubCategoryDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(true);

	const [name, setName] = useState("");

	const [category, setCategory] = useState("");

	const {
		data: categories,
		error,
		isLoading: isLoading1,
	} = useFetch(`${Config.REACT_APP_API_REST}/api/category`);

	useEffect(() => {
		if (id !== "new") {
			fetch(`${Config.REACT_APP_API_REST}/api/sub-category/${id}`)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					return Promise.reject(response);
				})
				.then((data) => {
					setName(data.name);
					setCategory(data.category);
				})
				.catch((err) => {
					toast.error("Internal Server Error.");
					navigate(`${ADMIN_SUB_CATEGORY}/new`);
				});
		} else {
			setName("");
			setCategory("");
		}
		setIsLoading(false);
	}, [id, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`${Config.REACT_APP_API_REST}/api/sub-category/${
					id === "new" ? "" : id
				}`,
				{
					method: id === "new" ? "POST" : "PUT",
					body: JSON.stringify({ name, category }),
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						"x-auth-token": localStorage.getItem("token"),
					},
				}
			);

			const { message } = await response.json();
			if (response.status >= 400) {
				toast.error(message);
				return;
			}

			navigate(ADMIN_SUB_CATEGORY);
			toast.success(message);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	if (error) {
		toast.error("Internal Server Error.");
		return;
	}

	return (
		<SubCategoryForm
			id={id}
			isLoading={isLoading}
			isLoading1={isLoading1}
			name={name}
			setName={setName}
			category={category}
			setCategory={setCategory}
			onSubmit={handleSubmit}
			categories={categories}
		/>
	);
};

export default SubCategoryDetails;
