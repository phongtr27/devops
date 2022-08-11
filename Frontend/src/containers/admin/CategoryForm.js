import { Form, Loading } from "../../components";

const CategoryForm = ({
	id,
	isLoading,
	name,
	setName,
	img,
	selectedFile,
	onFileUpload,
	onSubmit,
}) => {
	return (
		<div className="main">
			{isLoading ? <Loading /> : null}
			<Form.BigContainer>
				{id === "new" ? (
					<Form.Title>New Category</Form.Title>
				) : (
					<Form.Title>Category</Form.Title>
				)}

				<Form.Base onSubmit={onSubmit}>
					<Form.Label htmlFor="name">Category Name</Form.Label>
					<Form.Input
						type="text"
						name="name"
						id="name"
						required
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>

					<Form.Label htmlFor="image">Image</Form.Label>
					<Form.FileInput
						type="file"
						name="image"
						id="image"
						accept="image/*"
						multiple
						onChange={(e) => onFileUpload(e)}
					>
						{selectedFile && (
							<Form.Image src={selectedFile.preview} />
						)}
						{img && !selectedFile && (
							<Form.Image
								src={`${process.env.REACT_APP_API_REST}/public${img}`}
								alt="category image"
							/>
						)}
					</Form.FileInput>

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

export default CategoryForm;
