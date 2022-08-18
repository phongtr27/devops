import { BannerSlider, Category, ProductSlider } from "../../containers";
import useFetch from "../../hooks/useFetch";
import { Fade } from "react-awesome-reveal";
import { ERROR } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	console.log(process.env.REACT_APP_API_PRODUCT);

	const {
		data: categories,
		error: err1,
		isLoading: isLoading1,
	} = useFetch(`${process.env.REACT_APP_API_REST}/api/category`);

	const {
		data: latestProducts,
		error: err2,
		isLoading: isLoading2,
	} = useFetch(`${process.env.REACT_APP_API_PRODUCT}/latest`);

	const {
		data: saleProducts,
		error: err3,
		isLoading: isLoading3,
	} = useFetch(`${process.env.REACT_APP_API_PRODUCT}/discount`);

	if (err1 || err2 || err3) {
		return navigate(`${ERROR}`);
	}

	return (
		<>
			<Fade triggerOnce>
				<BannerSlider />
			</Fade>

			<Fade triggerOnce>
				<Category categories={categories} isLoading={isLoading1} />
			</Fade>

			<Fade triggerOnce>
				<ProductSlider
					title="NEW ARRIVALS"
					products={latestProducts}
					isLoading={isLoading2}
				/>
			</Fade>

			<Fade triggerOnce>
				<ProductSlider
					title="HOT SALE"
					products={saleProducts}
					isLoading={isLoading3}
				/>
			</Fade>
		</>
	);
};

export default Home;
