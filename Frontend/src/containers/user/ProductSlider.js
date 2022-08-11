import { useRef } from "react";
import { Card } from "../../components";
import { ProductCard } from "../../containers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSlider = ({ title, products, isLoading }) => {
	const settings = {
		arrows: false,
		dots: false,
		speed: 500,
		slidesToShow: products?.length < 4 ? products.length : 4,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
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
				<Card center>
					<Card.Title>{title}</Card.Title>

					<Skeleton height={300} />
				</Card>
			) : (
				<Card center>
					<Card.Title>{title}</Card.Title>

					<Card.List>
						<Slider {...settings} ref={sliderRef}>
							{products?.map((product, index) => (
								<ProductCard key={index} product={product} />
							))}
						</Slider>
					</Card.List>

					<Card.PrevButton
						className="fas fa-chevron-left"
						onClick={goToPrevious}
					/>

					<Card.NextButton
						className="fas fa-chevron-right"
						onClick={goToNext}
					/>
				</Card>
			)}
		</>
	);
};

export default ProductSlider;
