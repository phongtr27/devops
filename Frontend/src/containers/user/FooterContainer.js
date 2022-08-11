import { Footer } from "../../components";
import { CONTACT, SHOP } from "../../constants/routes";

const FooterContainer = () => {
	return (
		<Footer>
			<Footer.Item>
				<Footer.Logo to="#">NIKIDAS</Footer.Logo>
				<Footer.Text>
					The customer is at the heart of our unique business model.
				</Footer.Text>
				<Footer.Image
					src="/images/banners/details-payment.png"
					alt="payment"
				/>
			</Footer.Item>

			<Footer.Item>
				<Footer.Title>SHOPPING</Footer.Title>
				<Footer.Link to={`${SHOP}/?category=Clothing`}>
					Clothing
				</Footer.Link>
				<Footer.Link to={`${SHOP}/?category=Accessories`}>
					Accessories
				</Footer.Link>
				<Footer.Link to={`${SHOP}/?category=Shoes`}>Shoes</Footer.Link>
				<Footer.Link to={`${SHOP}/?sale=true`}>Sale Off</Footer.Link>
			</Footer.Item>

			<Footer.Item>
				<Footer.Title>CONTACT</Footer.Title>
				<Footer.Link to={CONTACT}>Our store</Footer.Link>
				<Footer.Text>+84908227738</Footer.Text>
				<Footer.Text>phongtran270997@gmail.com</Footer.Text>
			</Footer.Item>
		</Footer>
	);
};

export default FooterContainer;
