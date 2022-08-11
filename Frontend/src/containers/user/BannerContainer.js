import { Banner } from "../../components";
import { SHOP } from "../../constants/routes";

const BannerContainer = ({ url }) => {
	return (
		<Banner url={url}>
			<Banner.Content>
				<Banner.SmallTitle>Summer Collection</Banner.SmallTitle>
				<Banner.Title>Fall - Winter Collections 2022</Banner.Title>
				<Banner.Text>
					A specialist label creating luxury essentials. Ethically
					crafted with an unwavering commitment to exceptional
					quality.
				</Banner.Text>
				<Banner.Button to={SHOP}>SHOP NOW</Banner.Button>
			</Banner.Content>
		</Banner>
	);
};

export default BannerContainer;
