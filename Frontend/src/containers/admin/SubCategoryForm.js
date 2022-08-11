import { Form, Loading } from "../../components";

const SubCategoryForm = ({
	id,
	isLoading,
	isLoading1,
	name,
	setName,
	category,
	setCategory,
	onSubmit,
	categories,
}) => {
	return (
		<div className="main">
			{isLoading || isLoading1 ? <Loading /> : null}
			<Form.BigContainer>
				{id === "new" ? (
					<Form.Title>New Sub-Category</Form.Title>
				) : (
					<Form.Title>Sub-Category</Form.Title>
				)}

				<Form.Base onSubmit={onSubmit}>
					<Form.Label htmlFor="name">Sub-Category Name</Form.Label>
					<Form.Input
						type="text"
						name="name"
						id="name"
						required
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>

					<Form.Label htmlFor="category">Category</Form.Label>
					<Form.Select
						name="category"
						id="category"
						required
						value={category}
						onChange={({ target }) => setCategory(target.value)}
					>
						<Form.Option value="" disabled hidden>
							--- Select an option ---
						</Form.Option>
						{categories?.map((option, index) => (
							<Form.Option value={option?.name} key={index}>
								{option?.name}
							</Form.Option>
						))}
					</Form.Select>

					<Form.Button
						type="submit"
						background_color="#00c292"
						hover_color="#009c75"
					>
						Submit
					</Form.Button>
				</Form.Base>
			</Form.BigContainer>
		</div>
	);
};

export default SubCategoryForm;
