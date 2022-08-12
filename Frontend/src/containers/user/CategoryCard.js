import { Card } from "../../components";
import { SHOP } from "../../constants/routes";
import Config from "../../config.json"

const CategoryCard = ({ category }) => {
	return (
		<Card.Item to={`${SHOP}/?category=${category.name}`} center={1}>
			<Card.Wrapper>
				<Card.Image
					src={`${Config.REACT_APP_API_REST}/public${category.img}`}
					alt="category"
				/>
			</Card.Wrapper>
			<Card.Name>{category.name}</Card.Name>
		</Card.Item>
	);
};

export default CategoryCard;
