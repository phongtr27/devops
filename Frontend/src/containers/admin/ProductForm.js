import { Form, Loading, Table } from "../../components";

const ProductForm = ({
	id,
	isLoading,
	isLoading1,
	isLoading2,
	name,
	setName,
	category,
	setCategory,
	subCategory,
	setSubCategory,
	description,
	setDescription,
	price,
	setPrice,
	discount,
	setDiscount,
	selectedFile,
	options,
	onOptionAdd,
	onOptionDelete,
	onSizeAdd,
	onSizeDelete,
	onColorChange,
	onFileUpload,
	onQuantityPerSizeChange,
	onSubmit,
	categories,
	subCategories,
}) => {
	return (
		<div className="main">
			{isLoading || isLoading1 || isLoading2 ? <Loading /> : null}

			<Form.BigContainer>
				{id === "new" ? (
					<Form.Title>New Product</Form.Title>
				) : (
					<Form.Title>Product</Form.Title>
				)}

				<Form.Base onSubmit={onSubmit}>
					<Form.Label htmlFor="name">Product Name</Form.Label>
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

					<Form.Label htmlFor="subCategory">Sub-Category</Form.Label>
					<Form.Select
						name="subCategory"
						id="subCategory"
						required
						value={subCategory}
						onChange={({ target }) => setSubCategory(target.value)}
					>
						<Form.Option value="" disabled hidden>
							--- Select an option ---
						</Form.Option>
						{subCategories?.map((option, index) => (
							<Form.Option value={option?.name} key={index}>
								{option?.name}
							</Form.Option>
						))}
					</Form.Select>

					<Form.Label htmlFor="description">Description</Form.Label>
					<Form.TextArea
						type="text"
						name="description"
						id="description"
						required
						value={description}
						onChange={({ target }) => setDescription(target.value)}
					/>

					<Form.Label htmlFor="price">Price ($)</Form.Label>
					<Form.Input
						type="text"
						name="price"
						id="price"
						required
						value={price}
						onChange={({ target }) => setPrice(target.value)}
					/>

					<Form.Label htmlFor="discount">Discount (%)</Form.Label>
					<Form.Input
						type="number"
						name="discount"
						id="discount"
						required
						min={0}
						value={discount}
						onChange={({ target }) => setDiscount(target.value)}
					/>

					<Form.Label>
						Product Attributes{"  "}
						<Form.SmallButton onClick={onOptionAdd}>
							{" "}
							<i className="fas fa-plus-square"></i>
						</Form.SmallButton>
					</Form.Label>

					{options.map((option, outerIndex) => (
						<Form.MidContainer key={outerIndex}>
							<Form.Text>
								{`Option ${outerIndex + 1}`}{" "}
								<Form.SmallButton
									onClick={() => onOptionDelete(outerIndex)}
								>
									<i className="fas fa-minus-square"></i>
								</Form.SmallButton>
							</Form.Text>

							<Form.Label htmlFor="color">Color</Form.Label>
							<Form.ColorInput
								type="color"
								name="color"
								id="color"
								value={option.color}
								onChange={(e) => onColorChange(outerIndex, e)}
							/>

							<Form.Label htmlFor="image">Image</Form.Label>
							<Form.FileInput
								type="file"
								name="image"
								id="image"
								accept="image/*"
								onChange={(e) => onFileUpload(outerIndex, e)}
								multiple
							>
								{option.img &&
									(!selectedFile[outerIndex] ||
										selectedFile[outerIndex]?.length ===
											0) && (
										<div>
											{option.img.map((image, index) => (
												<Form.Image
													key={index}
													src={`${process.env.REACT_APP_API_PRODUCT}/public${image}`}
													alt="product image"
												/>
											))}
										</div>
									)}
							</Form.FileInput>

							<div style={{ overflow: "auto" }}>
								<Table.Base fullBorder>
									<Table.Head>
										<Table.Row>
											<Table.Header>Size</Table.Header>
											<Table.Header>
												Quantity
											</Table.Header>
											<Table.Header>Action</Table.Header>
										</Table.Row>
									</Table.Head>
									<Table.Body>
										{option.quantityPerSize.map(
											(item, index) => (
												<Table.Row key={index}>
													<Table.Data>
														<Form.Input
															type="text"
															id="size"
															name="size"
															required
															value={item.size}
															onChange={(e) =>
																onQuantityPerSizeChange(
																	outerIndex,
																	index,
																	e
																)
															}
														/>
													</Table.Data>

													<Table.Data>
														<Form.Input
															type="number"
															id="quantity"
															name="quantity"
															min={1}
															required
															value={
																item.quantity
															}
															onChange={(e) =>
																onQuantityPerSizeChange(
																	outerIndex,
																	index,
																	e
																)
															}
														/>
													</Table.Data>

													<Table.Data>
														<Table.Button
															onClick={() =>
																onSizeDelete(
																	outerIndex,
																	index
																)
															}
														>
															<i className="fas fa-trash-alt"></i>
														</Table.Button>
													</Table.Data>
												</Table.Row>
											)
										)}
									</Table.Body>
								</Table.Base>
							</div>

							<Form.SmallButton
								onClick={() => onSizeAdd(outerIndex)}
							>
								Add more...
							</Form.SmallButton>
						</Form.MidContainer>
					))}
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

export default ProductForm;
