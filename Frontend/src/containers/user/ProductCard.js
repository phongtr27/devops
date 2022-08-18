import { Card } from "../../components";
import { SHOP } from "../../constants/routes";

const ProductCard = ({ product }) => {
	return (
		<Card.Item to={`${SHOP}/${product._id}`}>
			<Card.Wrapper>
				<Card.Image
					src={`${process.env.REACT_APP_API_PRODUCT}/public${product.options[0].img[0]}`}
					alt="product"
				/>
				{product.discount > 0 && <Card.Tag>SALE</Card.Tag>}
			</Card.Wrapper>

			<Card.Name>{product.name}</Card.Name>

			<Card.Text>
				{`$${(product.price * (1 - product.discount / 100)).toFixed(
					2
				)}`}

				{product.discount > 0 && (
					<Card.SubText>{`$${product.price}`}</Card.SubText>
				)}
			</Card.Text>
		</Card.Item>
	);
};

export default ProductCard;
