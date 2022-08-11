import { Card } from "../../components";
import { useRef } from "react";
import { CategoryCard } from "../../containers";
import useWidth from "../../hooks/useWidth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Category = ({ categories, isLoading }) => {
	const { width } = useWidth();

	const settings = {
		arrows: false,
		dots: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
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
					<Card.Title>WHAT DO YOU FANCY?</Card.Title>
					<Skeleton height={300} />
				</Card>
			) : (
				<Card center>
					<Card.Title>WHAT DO YOU FANCY?</Card.Title>

					<Card.List>
						<Slider {...settings} ref={sliderRef}>
							{categories?.map((category, index) => (
								<CategoryCard key={index} category={category} />
							))}
						</Slider>
					</Card.List>

					{width <= 768 && (
						<Card.PrevButton
							className="fas fa-chevron-left"
							onClick={goToPrevious}
						/>
					)}

					{width <= 768 && (
						<Card.NextButton
							className="fas fa-chevron-right"
							onClick={goToNext}
						/>
					)}
				</Card>
			)}
		</>
	);
};

export default Category;
