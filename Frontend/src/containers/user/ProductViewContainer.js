import { useRef } from "react";
import { ProductView } from "../../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Config from "../../config.json";

const ProductViewContainer = ({
	product,
	isLoading,
	optionIndex,
	onOptionChange,
	size,
	onSizeChange,
	quantity,
	onQuantityChange,
	onAddToCart,
	width,
}) => {
	const settings = {
		arrows: false,
		dots: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	};

	const sliderRef = useRef();

	const goToNext = () => {
		sliderRef.current.slickNext();
	};

	const goToPrevious = () => {
		sliderRef.current.slickPrev();
	};

	return (
		<>
			{isLoading ? (
				<ProductView>
					<ProductView.Wrapper>
						{width <= 480 ? (
							<>
								<Skeleton
									count={7}
									style={{ marginBottom: "20px" }}
								/>
								<Skeleton
									height={400}
									style={{ marginBottom: "20px" }}
								/>
								<Skeleton
									count={5}
									style={{ marginBottom: "20px" }}
								/>
							</>
						) : (
							<Skeleton
								count={15}
								style={{ marginBottom: "20px" }}
							/>
						)}
					</ProductView.Wrapper>

					{width > 480 && (
						<ProductView.Wrapper>
							<Skeleton height={400} />
						</ProductView.Wrapper>
					)}
				</ProductView>
			) : (
				<ProductView>
					<ProductView.Wrapper>
						<ProductView.Text
							color="#f6aa8d"
							fontWeight="700"
							fontSize="18px"
						>
							{`$${(
								product?.price *
								(1 - product?.discount / 100)
							).toFixed(2)}`}
						</ProductView.Text>

						{product?.discount > 0 && (
							<ProductView.SubText>{`$${product.price}`}</ProductView.SubText>
						)}

						<ProductView.Name>{product?.name}</ProductView.Name>

						<ProductView.Text uppercase={true} fontWeight="540">
							{product?.subCategory}
						</ProductView.Text>

						<ProductView.Text italic={true}>
							{product?.description}
						</ProductView.Text>

						{width <= 480 && (
							<ProductView.Wrapper>
								<Slider {...settings} ref={sliderRef}>
									{product?.options[optionIndex].img.map(
										(image, index) => (
											<ProductView.Image
												key={index}
												src={`${Config.REACT_APP_API_PRODUCT}/public${image}`}
											/>
										)
									)}
								</Slider>

								<ProductView.PrevButton
									className="fas fa-chevron-left"
									onClick={goToPrevious}
								/>
								<ProductView.NextButton
									className="fas fa-chevron-right"
									onClick={goToNext}
								/>
							</ProductView.Wrapper>
						)}

						{product?.options.map((option, index) => (
							<ProductView.ImagePreview
								key={index}
								src={`${Config.REACT_APP_API_PRODUCT}/public${option.img[0]}`}
								onClick={() => onOptionChange(index)}
								active={optionIndex === index}
							/>
						))}

						<ProductView.Title>SIZE:</ProductView.Title>

						{product?.options[optionIndex].quantityPerSize.map(
							(item, index) => (
								<ProductView.Option
									key={index}
									onClick={() => onSizeChange(item.size)}
									active={size === item.size}
								>
									{item.size}
								</ProductView.Option>
							)
						)}

						<ProductView.Title>QUANTITY:</ProductView.Title>
						<ProductView.Input
							type="number"
							value={quantity}
							min={1}
							required
							onChange={({ target }) =>
								onQuantityChange(target.value)
							}
						/>

						<ProductView.Button
							disabled={size === null}
							onClick={() =>
								onAddToCart(
									product._id,
									product.options[optionIndex].color,
									size,
									quantity
								)
							}
						>
							ADD TO CART
						</ProductView.Button>
					</ProductView.Wrapper>

					{width > 480 && (
						<ProductView.Wrapper>
							<Slider {...settings} ref={sliderRef}>
								{product?.options[optionIndex].img.map(
									(image, index) => (
										<ProductView.Image
											key={index}
											src={`${Config.REACT_APP_API_PRODUCT}/public${image}`}
										/>
									)
								)}
							</Slider>

							<ProductView.PrevButton
								className="fas fa-chevron-left"
								onClick={goToPrevious}
							/>
							<ProductView.NextButton
								className="fas fa-chevron-right"
								onClick={goToNext}
							/>
						</ProductView.Wrapper>
					)}
				</ProductView>
			)}
		</>
	);
};

export default ProductViewContainer;
